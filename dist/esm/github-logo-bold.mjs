export const name="github-logo-bold";
export const id="dl_387eb25d96c24bef98c5";
export const url=new URL("../icons/github-logo-bold.svg?v=415f29f0112e590c24df4de0b6883326c3684040d2fdfed2b40851321d74a9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
