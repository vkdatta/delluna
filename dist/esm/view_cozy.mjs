export const name="view_cozy";
export const id="dl_26dfa6f0c9b1d2845c64";
export const url=new URL("../icons/view_cozy.svg?v=eb6b4d72988e64775370fde209329f37541f2eac70e9f4f25b81f649f6fb5f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
