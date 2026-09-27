export const name="arrow-u-up-left-bold";
export const id="dl_f927479647ed47b68219";
export const url=new URL("../icons/arrow-u-up-left-bold.svg?v=932e329ddd0f6f821e5e96975ab0b8e7139b22ffba5251a8b4377cedf064cb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
