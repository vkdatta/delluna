export const name="lucid_3-ratio";
export const id="dl_969a55ab3b2645aeac52";
export const url=new URL("../icons/lucid_3-ratio.svg?v=d50b34b0f34eea38d6898dfd4e1acd8d38e3a6c1383eaea7e3f84efb9d074d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
