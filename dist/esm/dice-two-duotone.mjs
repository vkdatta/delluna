export const name="dice-two-duotone";
export const id="dl_b06d0e9353764791b915";
export const url=new URL("../icons/dice-two-duotone.svg?v=88739b0cfdcb45b1492c950c35415b62286e031ee03d5af6371d7c75f59fd3fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
