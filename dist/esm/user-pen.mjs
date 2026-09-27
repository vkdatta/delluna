export const name="user-pen";
export const id="dl_b4e30c82d8b941189a92";
export const url=new URL("../icons/user-pen.svg?v=ae8cf8b1dadc44b25d528e5c5ff6ff00fa31d48626b2f9b7b90b91c6673281e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
