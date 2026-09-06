export const name="lucid_2-helicopter";
export const id="dl_e11d1a95a2804f34aca1";
export const url=new URL("../icons/lucid_2-helicopter.svg?v=81c9c22609f51ff577ccf9eab0fc32c43ed7f16695551346fb08a935b3af6b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
