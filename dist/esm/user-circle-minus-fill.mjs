export const name="user-circle-minus-fill";
export const id="dl_ea2c9e46577a4c7aa863";
export const url=new URL("../icons/U/user-circle-minus-fill.svg?v=c208e9c9280fe405d4a4ec44463c19161eb0a781bf8d2c70895425cac971c077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
