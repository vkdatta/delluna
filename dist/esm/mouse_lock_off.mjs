export const name="mouse_lock_off";
export const id="dl_9e560ea4109c30653fb7";
export const url=new URL("../icons/mouse_lock_off.svg?v=efe6da0fa2c673764b90526000094e5898809bf4cfeea7ec556771f4fcd39f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
