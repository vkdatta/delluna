export const name="target-duotone";
export const id="dl_fd3756c4ed46b969ce3c";
export const url=new URL("../icons/target-duotone.svg?v=d15617272a4f8f555328f9f93a1e1d3f994e1fdd7a5269fde0d4b2232a651816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
