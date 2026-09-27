export const name="number-square-one-bold";
export const id="dl_84667c556b0c41b59a25";
export const url=new URL("../icons/number-square-one-bold.svg?v=35ce6041894d2867e5365164a245f163055ded94920c1fd71f4686a510b9deee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
