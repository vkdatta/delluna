export const name="hand-deposit-thin";
export const id="dl_2a54793c6533452290e1";
export const url=new URL("../icons/hand-deposit-thin.svg?v=4633e85f91003f300ad18976b92a8978532c5d9f23b5d78ecc483ab6b4f945bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
