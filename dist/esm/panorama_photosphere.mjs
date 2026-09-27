export const name="panorama_photosphere";
export const id="dl_6a1d5514b0d5cdbb7b3d";
export const url=new URL("../icons/panorama_photosphere.svg?v=4727bfd430192d3f8a86085a3a66baaa8fc71aa69df69e65ebfc567233452f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
