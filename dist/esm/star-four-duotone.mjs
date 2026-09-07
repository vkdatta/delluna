export const name="star-four-duotone";
export const id="dl_e293058bffb34fd795f2";
export const url=new URL("../icons/S/star-four-duotone.svg?v=c33fee19f4329e9d125cc056bf08081de4b727835b10e3d45a1b891de705556e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
