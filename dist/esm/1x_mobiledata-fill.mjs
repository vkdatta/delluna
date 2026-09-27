export const name="1x_mobiledata-fill";
export const id="dl_704c263e04e27c8c75f1";
export const url=new URL("../icons/1x_mobiledata-fill.svg?v=2bffda3aeccd2bdcb88b85fed363b5a28629e6e9ad5b6a6569c8bb11f6ccaf97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
