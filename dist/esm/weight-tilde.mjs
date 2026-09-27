export const name="weight-tilde";
export const id="dl_ff2d82a28a904fd6ad01";
export const url=new URL("../icons/weight-tilde.svg?v=3bf9b77ac9e91191d25b74b6ed318e03c3948ab42fd49202cbf6107b8f01682a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
