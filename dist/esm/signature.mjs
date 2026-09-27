export const name="signature";
export const id="dl_eb9caf009704b40fc1dc";
export const url=new URL("../icons/signature.svg?v=22a81e7869d66905b91c0ec873ce7e251a34ed31e666ae714faf78a3c71c14fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
