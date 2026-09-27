export const name="seatbelt-duotone";
export const id="dl_7738c29b9be9ada476c9";
export const url=new URL("../icons/seatbelt-duotone.svg?v=8c6c77f675f0d84b52521030dc4377e1ee77b3c18e415d01a3cb84802933de0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
