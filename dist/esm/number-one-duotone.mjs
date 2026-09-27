export const name="number-one-duotone";
export const id="dl_6f68d869123d4eb98ad9";
export const url=new URL("../icons/number-one-duotone.svg?v=14cdd21afaadb29f6a7a6808c0b0b448afc86318939515f65164b389f69d0728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
