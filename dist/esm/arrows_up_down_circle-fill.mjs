export const name="arrows_up_down_circle-fill";
export const id="dl_831456b8114876fa7741";
export const url=new URL("../icons/arrows_up_down_circle-fill.svg?v=cadbb1121283c85cdf1da81ece1408cefe5192cafccb3bf3c2de11aefaad0282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
