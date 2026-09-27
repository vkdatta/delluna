export const name="checkbook-fill";
export const id="dl_a955ae44d37d7617b86b";
export const url=new URL("../icons/checkbook-fill.svg?v=eb26fe7decf71003f87b48cff690d79b1bede96d0dddb572819e635957092af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
