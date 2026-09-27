export const name="crown-cross-fill";
export const id="dl_85ebfc77af8d4a4a9da7";
export const url=new URL("../icons/crown-cross-fill.svg?v=7ed6119b681fb0781146095d1a308a5dd5b2af83cab7ea585876ae6c91333b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
