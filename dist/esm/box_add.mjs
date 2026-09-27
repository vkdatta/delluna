export const name="box_add";
export const id="dl_dece79b557f69689cbd9";
export const url=new URL("../icons/box_add.svg?v=9cb3ace95e502cf619c8eef454a2159f1fb0f365252aa20f04c407d384b9b7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
