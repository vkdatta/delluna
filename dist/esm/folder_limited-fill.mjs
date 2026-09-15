export const name="folder_limited-fill";
export const id="dl_1cecd5dc6bc7497a8515";
export const url=new URL("../icons/F/folder_limited-fill.svg?v=57d5cb4b7c58312abffc4b20abc4823fd03267a0bf21431b6bb795fa0c390679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
