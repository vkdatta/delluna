export const name="traffic_jam-fill";
export const id="dl_aee513c3671e4b59973b";
export const url=new URL("../icons/T/traffic_jam-fill.svg?v=84226e1386e5a4e47e98c1f4f1025e4e37efe41f469af7553dd3eafac44f6bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
