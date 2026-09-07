export const name="lucid_3-panel-top-open";
export const id="dl_7285e1663f214c88b6bb";
export const url=new URL("../icons/lucid_3-panel-top-open.svg?v=ce88452291b1190e3be0a21787c73f102df8f82112a5526ff6875b8719d56d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
