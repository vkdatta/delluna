export const name="rule_folder";
export const id="dl_576bcbdb9b139e83d670";
export const url=new URL("../icons/rule_folder.svg?v=b453a3e12762b3427ae6a1bf07d4b9c4637ac63ed02f8bb64110bb2ba2731fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
