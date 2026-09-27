export const name="lte_mobiledata_badge";
export const id="dl_0c826c3e0765bb09a03e";
export const url=new URL("../icons/lte_mobiledata_badge.svg?v=ea6d9da8983cce568187eee6e9020ea627b3ffe541190e19821cb85748b6386a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
