export const name="cloud-snow-fill";
export const id="dl_20d803e6e7834251b273";
export const url=new URL("../icons/cloud-snow-fill.svg?v=a63785812389fcf3490973acf158d7210cc7f233f86546f66114b133841a7bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
