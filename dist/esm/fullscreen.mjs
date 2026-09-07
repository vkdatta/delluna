export const name="fullscreen";
export const id="dl_c936b4b53ad3f62eda19";
export const url=new URL("../icons/fullscreen.svg?v=79942ce30aaea6d5d47ae9dd271b22eed442ec74ca150a4a8ada3d8c8ed2156b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
