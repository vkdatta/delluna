export const name="scan";
export const id="dl_c20faf96a35c808a8637";
export const url=new URL("../icons/scan.svg?v=491a93015229e9c91fb2e7a420ab076c1beda964e6940600e59edc0bbb823f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
