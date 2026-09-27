export const name="adf_scanner-fill";
export const id="dl_29436fce8f7343d77169";
export const url=new URL("../icons/adf_scanner-fill.svg?v=9d48dd659d90ac03e8a6619def92d6d049a00dc0ed71b2bfe99cb3529baf94ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
