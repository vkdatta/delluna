export const name="box_edit";
export const id="dl_7f60fd2875f4be0fd433";
export const url=new URL("../icons/box_edit.svg?v=6677b6fa530952932cbfec2afaf22dec4b7bcf810874cceb07296cb72b27c808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
