export const name="experiment";
export const id="dl_fda5563615824a75b545";
export const url=new URL("../icons/E/experiment.svg?v=b252c86fb4294105e1cf97198085739af8e2b4158a28d6c339b7630968f07d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
