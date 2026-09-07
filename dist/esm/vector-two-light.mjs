export const name="vector-two-light";
export const id="dl_4cbfe194f9e54524b11b";
export const url=new URL("../icons/V/vector-two-light.svg?v=f9a97cea3a8b95c1a5cc1c8254ef3c6f1d00bfc074af52f67bcce6ea2d056c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
