export const name="fastfood";
export const id="dl_df5a428c86053f7df245";
export const url=new URL("../icons/fastfood.svg?v=57baa999975ed3b92e23d2b95450f78c9a5dd1f6c748f1f20b73d5d2594e0b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
