export const name="lucid_2-hospital";
export const id="dl_6dfea996b55b4fafba07";
export const url=new URL("../icons/lucid_2-hospital.svg?v=34f2bbac63e7dc654a7750c8cfd71dc88cffab220374c3f7962747dd7a6600ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
