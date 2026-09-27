export const name="replace_image-fill";
export const id="dl_2aaa2b17480cfde82e4d";
export const url=new URL("../icons/replace_image-fill.svg?v=5b07b5d9e376aa09273daa9b5c200c317b4ae9a4dc8137935d734fd1e800dca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
