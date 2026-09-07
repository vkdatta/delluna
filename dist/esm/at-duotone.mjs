export const name="at-duotone";
export const id="dl_00c700e5a4f445408f1a";
export const url=new URL("../icons/at-duotone.svg?v=97e297431ac253758bf60327c5ae9fcd47aa93087add59f2d45238ae606992c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
