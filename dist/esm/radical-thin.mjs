export const name="radical-thin";
export const id="dl_3d9c1d7bcf994136b3dd";
export const url=new URL("../icons/radical-thin.svg?v=60cb5fc2ffe52adbae3a40f80568f4c0bd964664e4a25e6d1e75f98d5b9176e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
