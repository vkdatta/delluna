export const name="lucid_3-mouse-pointer-click";
export const id="dl_b65665829d7646058e87";
export const url=new URL("../icons/lucid_3-mouse-pointer-click.svg?v=a4dea053d177f32d35ebe3c872263f45c49f079454f2eed389eef84eeaec08ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
