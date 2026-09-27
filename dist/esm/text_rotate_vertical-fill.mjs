export const name="text_rotate_vertical-fill";
export const id="dl_feaa9250eb1f72554107";
export const url=new URL("../icons/text_rotate_vertical-fill.svg?v=b3dc21736817ed920ddd0fadf28b34db4de2cf09e91742831baa9db6e9f41cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
