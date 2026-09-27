export const name="square-scissors";
export const id="dl_a1baf5e0482b4d0c85d0";
export const url=new URL("../icons/square-scissors.svg?v=f21120b1901aed6ca060aed5638666e645af7fe6aa8ea17e6926d926fb7145fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
