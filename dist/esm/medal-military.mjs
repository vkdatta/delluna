export const name="medal-military";
export const id="dl_211b4f001fde4e2da0d7";
export const url=new URL("../icons/medal-military.svg?v=eea037f93ad5bd0dc744c5d7edfbcc6350d78c16cb5ba5a1ca876cc9a7dcb6e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
