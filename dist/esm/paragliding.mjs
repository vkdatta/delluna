export const name="paragliding";
export const id="dl_e0b1d9a5c6ea27413132";
export const url=new URL("../icons/paragliding.svg?v=276a407afc68d2c19eea09a0870bfb66a0c862a3b5506e2eee4aa8721b953501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
