export const name="edit_square";
export const id="dl_08b7c875921c70837957";
export const url=new URL("../icons/edit_square.svg?v=e486d597c1bd48049f8ce85393173e4149c2533f172dda459ec68c620f48d083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
