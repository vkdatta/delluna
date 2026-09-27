export const name="watch_button";
export const id="dl_9835c4c46348d8973569";
export const url=new URL("../icons/watch_button.svg?v=6f3c63e68923e2194ea018135b5a1610cfd2aa68071abe2e0f4abeb773f40055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
