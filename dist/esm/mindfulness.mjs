export const name="mindfulness";
export const id="dl_a83080f51cd3502a4028";
export const url=new URL("../icons/mindfulness.svg?v=406e5d8aa2807edfdcf485f9e6f58600eaab950dd41a2f608d379207e5fbd0e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
