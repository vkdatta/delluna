export const name="arrow-bend-down-left-light";
export const id="dl_92dacd9569a344f783ca";
export const url=new URL("../icons/arrow-bend-down-left-light.svg?v=b7af5a642b89cec655261757aff74ad264fc8ce84afab1782e0e4d83a91fab16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
