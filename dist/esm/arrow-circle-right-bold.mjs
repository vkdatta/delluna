export const name="arrow-circle-right-bold";
export const id="dl_44bd886c09f64f21b83a";
export const url=new URL("../icons/arrow-circle-right-bold.svg?v=619f6ec2caaa09ef026d5f305e575619be46e549108ff3fdeefe71348d718cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
