export const name="headphones-fill";
export const id="dl_69a36b39aa7f4c4ab59e";
export const url=new URL("../icons/headphones-fill.svg?v=0e558a571eede59f9d456a257473f9e61785f7d5a48dc0018a9adc361ebc8fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
