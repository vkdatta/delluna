export const name="desktop_landscape_add-fill";
export const id="dl_1297a9ccc875aba39bf8";
export const url=new URL("../icons/desktop_landscape_add-fill.svg?v=44781838416cbc0bde7ae050c619217e586293a1ae95b32e2283aacf541db114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
