export const name="next_week";
export const id="dl_42c10220c8a741dc8cb8";
export const url=new URL("../icons/next_week.svg?v=fbec766bd3944c5e4370f1aa3fbbbda15a5636dacfd7adc774edaddba161cdda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
