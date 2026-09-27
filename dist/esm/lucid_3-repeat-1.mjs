export const name="lucid_3-repeat-1";
export const id="dl_722bc73e51424463afe8";
export const url=new URL("../icons/lucid_3-repeat-1.svg?v=a70c448c1e54c66985f38388dc3969bfeff97d1e124024a25d66826b096f524e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
