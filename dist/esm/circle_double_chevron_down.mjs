export const name="circle_double_chevron_down";
export const id="dl_39be129ef876455de1e7";
export const url=new URL("../icons/circle_double_chevron_down.svg?v=c1f492c4089b0618c6e37a253e832a3228e2db08fe0e6459cf1edd1a93b99941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
