export const name="vertical_split";
export const id="dl_3305563a6311af4af1d9";
export const url=new URL("../icons/vertical_split.svg?v=ea3cb68c5cec31423d05cb1df79e7e4a3277ead221512cf7f9b20804e068e7b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
