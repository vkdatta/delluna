export const name="arrows-left-right-light";
export const id="dl_0ab7f92b21fe481498c2";
export const url=new URL("../icons/arrows-left-right-light.svg?v=cd8cfa06fa76a6ecf0a2cf7e5aad8fcada74911cd891fa7d55a22a91fa1a72b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
