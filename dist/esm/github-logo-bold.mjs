export const name="github-logo-bold";
export const id="dl_387eb25d96c24bef98c5";
export const url=new URL("../icons/github-logo-bold.svg?v=6dc84b1fda745c10a542d908abe6595634bd9590e85f630024f620e917626a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
