export const name="lucid_2-heading-1";
export const id="dl_367d5f188a4e49aebcf5";
export const url=new URL("../icons/lucid_2-heading-1.svg?v=8c3aeb2dda38eacfeb7ff47e0d8df7eb8cab0c48c8b0bd4ca6861c9ef0c86655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
