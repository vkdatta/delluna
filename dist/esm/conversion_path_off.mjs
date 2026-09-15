export const name="conversion_path_off";
export const id="dl_ae622d37e0a54ce7ab1c";
export const url=new URL("../icons/C/conversion_path_off.svg?v=5b4efde7c437c497f3d64d0dab0d89ab69436b7b22afe5f3a5a4888c28c0dc80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
