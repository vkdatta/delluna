export const name="auto_transmission-fill";
export const id="dl_1d26e515d54d269fb564";
export const url=new URL("../icons/auto_transmission-fill.svg?v=a8b426a4837f1b8ed5f93842b54679891f4e3023f537e6e1b361086e95d27861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
