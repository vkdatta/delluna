export const name="sort-ascending-duotone";
export const id="dl_5ae28670c0c644e496e9";
export const url=new URL("../icons/S/sort-ascending-duotone.svg?v=65a1f05c50799dfb2f4ca7dcea2e8ed72e6e620121b793513527d41629b4d6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
