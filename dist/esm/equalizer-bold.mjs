export const name="equalizer-bold";
export const id="dl_48dc58f41e024735bd30";
export const url=new URL("../icons/equalizer-bold.svg?v=dd5d878b2ef7726e3e4ec2bfa46b7a736a2bd99dc7b1b12088e3b6227955c610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
