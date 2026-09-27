export const name="speed_1_75-fill";
export const id="dl_42ea0a453e82d113b6a1";
export const url=new URL("../icons/speed_1_75-fill.svg?v=8aaccf178413ce5da71a11dae691d32a4582b2afd31c858e55625d31110f3bca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
