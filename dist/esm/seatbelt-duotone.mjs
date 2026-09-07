export const name="seatbelt-duotone";
export const id="dl_19d4db57007d4b4a8b9f";
export const url=new URL("../icons/S/seatbelt-duotone.svg?v=8c6c77f675f0d84b52521030dc4377e1ee77b3c18e415d01a3cb84802933de0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
