export const name="lucid_2-gift";
export const id="dl_c308e3a8301a4b9b8b77";
export const url=new URL("../icons/lucid_2-gift.svg?v=3f2d80636a28769194c7596ec7bcb0f8939c2d8b6fd24e463a777c72b4229ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
