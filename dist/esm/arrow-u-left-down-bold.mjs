export const name="arrow-u-left-down-bold";
export const id="dl_a0a625318373425c9e71";
export const url=new URL("../icons/arrow-u-left-down-bold.svg?v=625a52ed46f912672ee948438c05b7e301a940ecd5ae7cf6bfdeb54ee0139a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
