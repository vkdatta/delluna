export const name="funnel-simple-light";
export const id="dl_d37f9116094a4fa1ab52";
export const url=new URL("../icons/funnel-simple-light.svg?v=ede5e87465ce4e35047be9b0d08369dc81b4899cf54deabb7227ff0df77a845e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
