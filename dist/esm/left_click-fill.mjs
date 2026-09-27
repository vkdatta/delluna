export const name="left_click-fill";
export const id="dl_8b65b77b6c4e147f302e";
export const url=new URL("../icons/left_click-fill.svg?v=84719a1252d49e068661db6ded13eb0f47b759e03017b9b45eaa71dced01adf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
