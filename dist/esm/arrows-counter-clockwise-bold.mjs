export const name="arrows-counter-clockwise-bold";
export const id="dl_d93ba6390649411a8ae5";
export const url=new URL("../icons/arrows-counter-clockwise-bold.svg?v=7591fbef32024c905157bf2785ae91bec85dc0be5aab63d8aae3e9986b7c924b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
