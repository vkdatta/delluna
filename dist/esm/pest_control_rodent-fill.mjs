export const name="pest_control_rodent-fill";
export const id="dl_c0c386a31e61eba25299";
export const url=new URL("../icons/pest_control_rodent-fill.svg?v=c3ec4f4d372d2909067bcfdd30947ce93dd64adf8c767d7865321dc2ce6380ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
