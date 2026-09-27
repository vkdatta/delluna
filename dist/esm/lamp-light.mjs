export const name="lamp-light";
export const id="dl_9dc3f0241f5f4ce7b406";
export const url=new URL("../icons/lamp-light.svg?v=6756791b25912db101852bdc1196db6a714fe1d92d7b9fff7c95ddd6ef276845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
