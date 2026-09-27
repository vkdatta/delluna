export const name="panorama_photosphere";
export const id="dl_e5defe7172f2bd3394f3";
export const url=new URL("../icons/panorama_photosphere.svg?v=8d602f29b61c9bd2881325907756cf429b0f679e3741e81a83e8359218b1c354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
