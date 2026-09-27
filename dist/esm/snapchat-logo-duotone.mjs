export const name="snapchat-logo-duotone";
export const id="dl_c8ed85eff737d6f91d8d";
export const url=new URL("../icons/snapchat-logo-duotone.svg?v=8928cdd8215626c4a2f83c5345a3ab334e1a0dc1d1bca604a6cf3432051984c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
