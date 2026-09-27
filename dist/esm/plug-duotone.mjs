export const name="plug-duotone";
export const id="dl_3837523e2967470e80f7";
export const url=new URL("../icons/plug-duotone.svg?v=d624e8f45b180113fb8c13f6ae1cbcad2a63ddac7af738a92284749b4a9bfc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
