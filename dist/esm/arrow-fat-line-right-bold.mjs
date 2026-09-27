export const name="arrow-fat-line-right-bold";
export const id="dl_fd27aa8fd2034dd9a28a";
export const url=new URL("../icons/arrow-fat-line-right-bold.svg?v=4efc41978ee1a5b7b1c1cfa02e4810dcbd4a840c90654244a1086fbed84abe35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
