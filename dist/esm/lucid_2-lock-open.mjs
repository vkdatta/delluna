export const name="lucid_2-lock-open";
export const id="dl_43cf258b931d430694e8";
export const url=new URL("../icons/lucid_2-lock-open.svg?v=6a035c08540d9e32e4c2f5ab6db805424024cca8bc4747dddfd1638a985e19e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
