export const name="lucid_2-log-out";
export const id="dl_b6e5c32bf52d4834b96f";
export const url=new URL("../icons/lucid_2-log-out.svg?v=5989a4d65096aef869bb9b62ddcda1ee11d680f04a1945cce0edc612eb3220df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
