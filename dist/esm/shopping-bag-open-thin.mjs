export const name="shopping-bag-open-thin";
export const id="dl_8bf9255ab8aa4890ace9";
export const url=new URL("../icons/S/shopping-bag-open-thin.svg?v=d0ed7c07c86f1393a20ea1d5492e8fb4b4c9bb820b895e92dec1c8d8a471a651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
