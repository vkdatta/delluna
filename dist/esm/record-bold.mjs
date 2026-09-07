export const name="record-bold";
export const id="dl_67d49e8a1cdb489a9d73";
export const url=new URL("../icons/record-bold.svg?v=81e271878e97a08b3df107c37ca06add6894658f7ad21b40e8531e574e013fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
