export const name="trackpad_input-fill";
export const id="dl_30235b5a680f4a1ba442";
export const url=new URL("../icons/T/trackpad_input-fill.svg?v=5dde77e8ca0de2fe93385766efcb852fde433be3054fdb4de1364f7dea2e3fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
