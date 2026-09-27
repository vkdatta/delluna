export const name="stacks-fill";
export const id="dl_4c764084d99870531cf3";
export const url=new URL("../icons/stacks-fill.svg?v=8ed4d5af3007773825aa560b9212b86ae32c6406cc1243d871b11c3702284dc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
