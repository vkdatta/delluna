export const name="facebook-logo-light";
export const id="dl_ba838aceccae4018a07c";
export const url=new URL("../icons/facebook-logo-light.svg?v=2df6ec3a9d882d03c8ce06d786624bcf3c55a61da8637bf46ed21c90b0c8d477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
