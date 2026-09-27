export const name="favorite";
export const id="dl_d91ff2f105849be34393";
export const url=new URL("../icons/favorite.svg?v=43da8b1cc9483aa5716606b55ab44cb4345695dba99f80bdcbfdd5acdeb0df75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
