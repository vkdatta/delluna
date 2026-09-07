export const name="text-h-two-thin";
export const id="dl_8862fc993adc440ea72b";
export const url=new URL("../icons/T/text-h-two-thin.svg?v=b7492c9918a56a22c099caf33e464e45ebc128116b54e97480c546b54cb20bba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
