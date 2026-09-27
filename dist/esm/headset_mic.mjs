export const name="headset_mic";
export const id="dl_528e5e0ae287b3cf89d9";
export const url=new URL("../icons/headset_mic.svg?v=f74ac3522807e6d92ee28f7524e9554d50a3bb0bc5cf0ec414c5734660514c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
