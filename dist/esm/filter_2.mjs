export const name="filter_2";
export const id="dl_50238c5ee4d642bcbcd6";
export const url=new URL("../icons/filter_2.svg?v=e607d024ef3de5aa3298e43f4bfdf0f44021563b24814f7678843547be710915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
