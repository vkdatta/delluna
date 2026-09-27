export const name="trail_length";
export const id="dl_d17257f2ccdb34ca85d8";
export const url=new URL("../icons/trail_length.svg?v=5851e3606276a298324dae928323e72f7ad8e295c9f9634a6e56cf5f7d272a06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
