export const name="simulation-fill";
export const id="dl_f805861608d0142ce7fc";
export const url=new URL("../icons/simulation-fill.svg?v=4f30181ff949670e49a2642b93c70ade0096379320a128fa0063e656dee1f5b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
