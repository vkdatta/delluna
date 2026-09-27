export const name="lucid_3-monitor-dot";
export const id="dl_56f2cb4a11c944d880ee";
export const url=new URL("../icons/lucid_3-monitor-dot.svg?v=e139afe31b56dff1166816c5281c5780b4ab934a9634a8795379bf5cbf404f11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
