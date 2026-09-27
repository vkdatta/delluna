export const name="watch_button-fill";
export const id="dl_8a6814d8e1a473c89d5b";
export const url=new URL("../icons/watch_button-fill.svg?v=414cf6ff17486b8d4a26638808a94b98d3f0843d59b603525097d71fa3178155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
