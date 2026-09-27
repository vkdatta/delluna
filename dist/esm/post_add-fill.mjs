export const name="post_add-fill";
export const id="dl_9322be811e294b225b1e";
export const url=new URL("../icons/post_add-fill.svg?v=b75b91ff71a363d282b92d1872332509b89a7b0bd71bfe372c4a06306b6e12e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
