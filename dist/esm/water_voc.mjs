export const name="water_voc";
export const id="dl_0a851135c601e799e5ee";
export const url=new URL("../icons/water_voc.svg?v=fc8d91f3f7001f1af9561ce97683fb2dff468cb74e3cfcce553df7eda2bcdac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
