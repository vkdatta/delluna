export const name="numpad-fill";
export const id="dl_0c7e0cf5352b40aa8690";
export const url=new URL("../icons/numpad-fill.svg?v=40be52d03d951d315f595b131ef4e4a9d25fbcdb92fdc805c8dda8c064ae95f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
