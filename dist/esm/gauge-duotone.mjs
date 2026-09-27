export const name="gauge-duotone";
export const id="dl_9539fd5a981d4907b57a";
export const url=new URL("../icons/gauge-duotone.svg?v=e26792a77f0284b8919fa1a823cafb59be2cd47821cd756056d2bbc4447bd88f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
