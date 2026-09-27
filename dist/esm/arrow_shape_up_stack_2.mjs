export const name="arrow_shape_up_stack_2";
export const id="dl_18df5ad578b2637d9c4a";
export const url=new URL("../icons/arrow_shape_up_stack_2.svg?v=e0bad588a73757c575a9399ebdb2e2cc66e31491650ebeb3e465b709729b6b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
