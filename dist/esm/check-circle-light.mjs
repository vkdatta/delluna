export const name="check-circle-light";
export const id="dl_1b70de51c3c94635812a";
export const url=new URL("../icons/check-circle-light.svg?v=a682bd2935b9136f5d0133b40141334eb9e38ec6b786ae505ae9dc9c4251906b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
