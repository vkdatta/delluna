export const name="arrows_up_down_circle-fill";
export const id="dl_3a8d047bbc7da0e28464";
export const url=new URL("../icons/arrows_up_down_circle-fill.svg?v=76d02212c3fa69ef74bc363a56f0ed8d0056b0630481d7029ae3c19b7ecd58f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
