export const name="file-plus-thin";
export const id="dl_1e68888d813d409f9d14";
export const url=new URL("../icons/file-plus-thin.svg?v=ce63013543d69be9150f5bfb13af8c2a259abbc8685ea75cec59f9fdba3e0e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
