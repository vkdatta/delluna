export const name="arrow-u-up-right-bold";
export const id="dl_f02a0bef0a594ac887eb";
export const url=new URL("../icons/arrow-u-up-right-bold.svg?v=5efc03851d6bdb698195f90c7ba0fe0fe5cde67b40c291565883a91edee45d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
