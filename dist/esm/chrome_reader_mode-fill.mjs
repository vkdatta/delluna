export const name="chrome_reader_mode-fill";
export const id="dl_9273d713db1ac165f658";
export const url=new URL("../icons/chrome_reader_mode-fill.svg?v=ae02f763928a4932c7dcb65db06c9ddff9e1384a671d347abab12777f1c123b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
