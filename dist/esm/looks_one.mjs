export const name="looks_one";
export const id="dl_c45b282314c4721f843d";
export const url=new URL("../icons/looks_one.svg?v=93421033c56d02deeb67354b1b3178d272d711babb5f3e83de8ad3f7ec1b3ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
