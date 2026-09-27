export const name="lucid_1-club";
export const id="dl_a6e94b4810f4412688d0";
export const url=new URL("../icons/lucid_1-club.svg?v=9f89f009dd6d54e3b1be7db225b91db8f0eab4a49b5ed1e6f020cebec3e398bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
