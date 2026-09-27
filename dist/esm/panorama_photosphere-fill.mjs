export const name="panorama_photosphere-fill";
export const id="dl_685a218c504247c1be7a";
export const url=new URL("../icons/panorama_photosphere-fill.svg?v=fc7a3e378a47edc7610ad7b8ae1ba3acfa45603159a6b16099ce7b62a32b45fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
