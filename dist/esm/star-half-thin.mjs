export const name="star-half-thin";
export const id="dl_f6b52a67879aae560428";
export const url=new URL("../icons/star-half-thin.svg?v=3f630921bf39dafcd4231551a4e97850a784f1ee5e52bc07153978844a849c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
