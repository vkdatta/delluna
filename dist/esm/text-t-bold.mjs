export const name="text-t-bold";
export const id="dl_dd21022594ae530c4c49";
export const url=new URL("../icons/text-t-bold.svg?v=dd71456ce04c50cdbf9ddc56b2d1c36dcf138ea9c8ebdadf39dc8314b4ffa2bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
