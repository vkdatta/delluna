export const name="on_device_training-fill";
export const id="dl_02b9bfb2f4723ca91ced";
export const url=new URL("../icons/on_device_training-fill.svg?v=f12a54f3cecf69cf45c6e761c8de5f9c31e80c6c2458002eca504827e33bdbde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
