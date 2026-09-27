export const name="double_chevron_up";
export const id="dl_bfa2c9a2ac539c0c447e";
export const url=new URL("../icons/double_chevron_up.svg?v=a668164e61177d38f9ca934531675cf3f8a549b0c34bb67c383714af4aad873a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
