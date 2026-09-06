export const name="lucid_1-columns-3-cog";
export const id="dl_5b59819466034bfa8b38";
export const url=new URL("../icons/lucid_1-columns-3-cog.svg?v=2ef2e13c0ad33185ad44adc17ba749bad0d6689eb7d21455eda71716cb9652e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
