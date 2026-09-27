export const name="stacked_line_chart";
export const id="dl_475533dcf41e886e4f9a";
export const url=new URL("../icons/stacked_line_chart.svg?v=7d5372ea0e4e110cf14b38059c5bc505479b1a2d707760fdeaa75f3a3d690391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
