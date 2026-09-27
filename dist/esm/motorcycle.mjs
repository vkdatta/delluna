export const name="motorcycle";
export const id="dl_dd37ed162c9645779556";
export const url=new URL("../icons/motorcycle.svg?v=2e2f2c7a272c5609c1c745bfb03eda0783fb1a656814ac18ed383e988aafc593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
