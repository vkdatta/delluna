export const name="lucid_1-cannabis-off";
export const id="dl_25219aace4ee45ac8e0e";
export const url=new URL("../icons/lucid_1-cannabis-off.svg?v=367241ffa137caa7ffb5374a4a9a2e2ab72f143ce5912df1b08965d5b6c86415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
