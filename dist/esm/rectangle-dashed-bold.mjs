export const name="rectangle-dashed-bold";
export const id="dl_a5210cfbe77b47639ab5";
export const url=new URL("../icons/rectangle-dashed-bold.svg?v=19278fe37c8bcf394b8dea75d1a9456ed833ea317e8aaf93ac93c82344dff82b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
