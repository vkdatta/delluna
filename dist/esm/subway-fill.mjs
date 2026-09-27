export const name="subway-fill";
export const id="dl_a91594a4e467f9a4172f";
export const url=new URL("../icons/subway-fill.svg?v=628ee28307dcf35c3261e8a6372f836a65c54e28cf75f030e8c3fc3a5b60b970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
