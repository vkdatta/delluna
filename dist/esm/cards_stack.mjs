export const name="cards_stack";
export const id="dl_bf6523b7d8e042ce985b";
export const url=new URL("../icons/cards_stack.svg?v=373449933d2ad06c1535899c30246127858c5e33dfc7963640dbbeb0a25f8089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
