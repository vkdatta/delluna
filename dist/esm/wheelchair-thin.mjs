export const name="wheelchair-thin";
export const id="dl_1bbf63ab78054fc4bd25";
export const url=new URL("../icons/W/wheelchair-thin.svg?v=cb5d1640f62b2b03c7e7c0e695112cf44b1f24c08e0f1c3fa5c73b1d92841574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
