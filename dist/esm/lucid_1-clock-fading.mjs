export const name="lucid_1-clock-fading";
export const id="dl_3b23f9a86e7745caa0e1";
export const url=new URL("../icons/lucid_1-clock-fading.svg?v=f7cdafd0950c93aa423b94d03d45835c43dc80b9b0629ac53ed5ae7aa3a4dd9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
