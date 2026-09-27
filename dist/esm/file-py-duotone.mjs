export const name="file-py-duotone";
export const id="dl_c4fa501f0ff344e69c7d";
export const url=new URL("../icons/file-py-duotone.svg?v=1ea3123184a1758cad2534007a1b95bc9fc1cba237be0c89eedd75dedf47561d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
