export const name="file_present-fill";
export const id="dl_587cb849a8084933b03f";
export const url=new URL("../icons/file_present-fill.svg?v=25e526172fe9c2e7c7b0ca9a93df2b5b10372a9955de6112d0d6f057663365e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
