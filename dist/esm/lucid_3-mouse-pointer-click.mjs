export const name="lucid_3-mouse-pointer-click";
export const id="dl_b65665829d7646058e87";
export const url=new URL("../icons/lucid_3-mouse-pointer-click.svg?v=d3f2c83a94ef9e39c9936c000ea7abfae8cae4446ddc1a5cd872abef78b0269d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
