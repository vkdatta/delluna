export const name="lucid_2-log-out";
export const id="dl_b6e5c32bf52d4834b96f";
export const url=new URL("../icons/lucid_2-log-out.svg?v=b6753800297557e0d73a1889e6f71e1b4e832c738ab6d5965bd609fef208fac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
