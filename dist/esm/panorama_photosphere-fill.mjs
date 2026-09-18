export const name="panorama_photosphere-fill";
export const id="dl_701256bcfd2b4f379276";
export const url=new URL("../icons/P/panorama_photosphere-fill.svg?v=9d29d4a3fc895175ebf72935273dc98508d979eeb705806e716c9ec8fe466c89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
