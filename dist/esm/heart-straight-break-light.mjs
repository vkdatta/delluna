export const name="heart-straight-break-light";
export const id="dl_b2b51941701d4197b099";
export const url=new URL("../icons/heart-straight-break-light.svg?v=a76cb202c075358465f037e05cb8265fb114b9138437945bcf073d9a1419dfb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
