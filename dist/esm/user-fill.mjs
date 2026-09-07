export const name="user-fill";
export const id="dl_678fef3965aa490f8bb7";
export const url=new URL("../icons/U/user-fill.svg?v=9e011a83732426181c4e18ebfe0322635ed7a222ccd572072b1233a91f88fd0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
