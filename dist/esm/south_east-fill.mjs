export const name="south_east-fill";
export const id="dl_a0c63b6dc0bb45d29b60";
export const url=new URL("../icons/S/south_east-fill.svg?v=fede5ba04fe5b8c8cbe79937b8444e977bee80ea04a4ebe102c63cfae51c4b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
