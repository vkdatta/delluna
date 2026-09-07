export const name="star-of-david-thin";
export const id="dl_9b8bf66ec4b04033af6b";
export const url=new URL("../icons/S/star-of-david-thin.svg?v=626d8f3768a45e47f3cb0939cb3e9cdbbf50aeadc2ad24fbf33d29ac1cb428c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
