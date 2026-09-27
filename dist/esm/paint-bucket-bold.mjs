export const name="paint-bucket-bold";
export const id="dl_64f19a8857744d92be5c";
export const url=new URL("../icons/paint-bucket-bold.svg?v=65436105d6211a3ec91afd5a63b88fa1ae4861f0d91bfb6d644d7cc0a390c7fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
