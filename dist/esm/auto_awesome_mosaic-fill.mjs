export const name="auto_awesome_mosaic-fill";
export const id="dl_7f169d503ee5f8b45322";
export const url=new URL("../icons/auto_awesome_mosaic-fill.svg?v=61b2e0b6c990e78c4c5e6560b2ad3f20ff95b16e9c6cede22fd0b9c0959901ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
