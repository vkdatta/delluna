export const name="panorama_photosphere";
export const id="dl_6e432ea088383ac522c8";
export const url=new URL("../icons/panorama_photosphere.svg?v=ec28b2bded3c7f5413cd930c88c53bc46421e33072e9d0f6b906d14d2cd0f69a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
