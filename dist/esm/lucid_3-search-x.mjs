export const name="lucid_3-search-x";
export const id="dl_4a51b080be7549fab8a7";
export const url=new URL("../icons/lucid_3-search-x.svg?v=35f446f51f6aa74b5ac48880875a05d079ddad95cfc06da5084c7cb39d0f23b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
