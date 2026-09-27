export const name="tilde-light";
export const id="dl_cd7cfe7183660c24bfed";
export const url=new URL("../icons/tilde-light.svg?v=96cb3f039787f13a0490c9e9fd78ad528f56a6546b73761216374bcc6df7090b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
