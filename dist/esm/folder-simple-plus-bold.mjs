export const name="folder-simple-plus-bold";
export const id="dl_cc9ccd66d174419c805c";
export const url=new URL("../icons/folder-simple-plus-bold.svg?v=c9cdbfff832ecc7d6dc7a8d83052a8b01d1c1f027e7f347080753fa2948a2318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
