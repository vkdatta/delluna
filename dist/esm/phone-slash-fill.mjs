export const name="phone-slash-fill";
export const id="dl_d02975d3b5004e7aa522";
export const url=new URL("../icons/phone-slash-fill.svg?v=412fcea19d004d1ef3508c17698503e0ba48990e925e50ed5deae44631e3c195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
