export const name="lucid_2-eye";
export const id="dl_77f70c206c6a472e80a5";
export const url=new URL("../icons/lucid_2-eye.svg?v=2aa155fa7c028776b9c30324cd54a76bbab8d84d070dea12f9aca55e274ad642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
