export const name="lucid_3-square-check-big";
export const id="dl_29f0028cc61f4d2aa811";
export const url=new URL("../icons/lucid_3-square-check-big.svg?v=17fea515c4c4adf67b1db41d1147b8920ea64e52892849cd3edf3ee90fa36a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
