export const name="checked_bag-fill";
export const id="dl_9e5f38c7db511c586c1e";
export const url=new URL("../icons/checked_bag-fill.svg?v=c1a02ec61e6293a895acc3c99680c5099b98d836bf53fca9055741a49c2c8e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
