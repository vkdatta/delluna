export const name="file-image-thin";
export const id="dl_d66c4f65e8174a8082e0";
export const url=new URL("../icons/file-image-thin.svg?v=c091c4818640edc861faf3141f2f51ea4680842d94038e84ad890ad9400fe3e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
