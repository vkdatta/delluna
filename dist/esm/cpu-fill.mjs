export const name="cpu-fill";
export const id="dl_bd2c0dad604e40cc9672";
export const url=new URL("../icons/cpu-fill.svg?v=958a047d5c965a70ab7e1d99f6c17ac36b5569088252cc779173392b8e0b30e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
