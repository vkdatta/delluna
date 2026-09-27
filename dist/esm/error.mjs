export const name="error";
export const id="dl_f0cb75e2e91934f4a91c";
export const url=new URL("../icons/error.svg?v=e9c6bd5ea81bfb8d77c1de658b7230e8c165c6bcb7257ca59c6b2216fe9eef17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
