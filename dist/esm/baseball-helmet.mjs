export const name="baseball-helmet";
export const id="dl_53195ab96bf04c949223";
export const url=new URL("../icons/baseball-helmet.svg?v=f00c2223b8e3680037878031ef32393b47350f0c3c05adc4c696196f3ffa6261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
