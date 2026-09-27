export const name="sun-dim-fill";
export const id="dl_ccdcd0162bb5f69bbe32";
export const url=new URL("../icons/sun-dim-fill.svg?v=c90cc6e6918e3f6a0db898c3d962d62f0b1609da0b1f2942f051b4ac1c95b4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
