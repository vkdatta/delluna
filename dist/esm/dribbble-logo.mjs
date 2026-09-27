export const name="dribbble-logo";
export const id="dl_62470fcd3aad4103885d";
export const url=new URL("../icons/dribbble-logo.svg?v=7f057b7457781c8210673569aa0f3017ee72d1d549a3d66d233e3e88e3e9707e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
