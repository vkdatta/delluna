export const name="close";
export const id="dl_5610a79fca8a27797397";
export const url=new URL("../icons/icons-svg/close.svg?v=a047a5ed469e84da54b29c6d2a7b9f5e03cd9150029e5f7533f3ab7bbb120fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
