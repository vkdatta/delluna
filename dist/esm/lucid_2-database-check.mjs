export const name="lucid_2-database-check";
export const id="dl_d011341c3b5f4757a649";
export const url=new URL("../icons/lucid_2-database-check.svg?v=038d68f9bd752aba31a774832fbe4a995ac7c46a4945e1d2a31876e5a220f888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
