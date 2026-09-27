export const name="folder-simple-plus-bold";
export const id="dl_cc9ccd66d174419c805c";
export const url=new URL("../icons/folder-simple-plus-bold.svg?v=4b0ad2b9c963359d9257e1d9988f665842a6ceede1af8209f423d732fd6d5e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
