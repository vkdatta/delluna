export const name="5k_plus";
export const id="dl_61ef5907bb794dc6bf64";
export const url=new URL("../icons/5k_plus.svg?v=b3aa5c8724a1f5309c4db4b5656a482d70bef3b94684b86db18b1eef1dec931e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
