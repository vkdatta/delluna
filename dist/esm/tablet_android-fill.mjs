export const name="tablet_android-fill";
export const id="dl_24693ea8eb6b610c02a3";
export const url=new URL("../icons/tablet_android-fill.svg?v=e2f4b385e67aa38956e9d6257a055ad9bd3c7b295a0845aa653929524d55bea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
