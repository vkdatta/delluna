export const name="wb_incandescent";
export const id="dl_8893013e150cd5fb0494";
export const url=new URL("../icons/wb_incandescent.svg?v=7b123e675a0b567ac059be11e5708742ac8bf85a4b9e1e46ecd80d43f965e345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
