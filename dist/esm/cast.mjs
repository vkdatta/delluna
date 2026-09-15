export const name="cast";
export const id="dl_df924091b4154102b33f";
export const url=new URL("../icons/C/cast.svg?v=05c461e7af9ef8b1971714b3a7e8ec5b288b6ac6c442b0381b06219a4dfbddfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
