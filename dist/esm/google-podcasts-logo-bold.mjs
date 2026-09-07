export const name="google-podcasts-logo-bold";
export const id="dl_f5922202b6fa45d0b640";
export const url=new URL("../icons/google-podcasts-logo-bold.svg?v=219b552147c70a5ad9d1107a0c23aec34659c07e6bace5f14a1002467ec9bbcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
