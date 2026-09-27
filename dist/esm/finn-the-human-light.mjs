export const name="finn-the-human-light";
export const id="dl_0b8a01942fa04aea8971";
export const url=new URL("../icons/finn-the-human-light.svg?v=5bd2a68dd0809d817b007b0df08623424356aaf50e3474cdf77db49c36813fea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
