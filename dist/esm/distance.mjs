export const name="distance";
export const id="dl_3264f767cadd3873fcff";
export const url=new URL("../icons/distance.svg?v=74a0df841aa292f54f981d9e9b3bd4f38903f4aea006965801b00779980f7c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
