export const name="gradient-light";
export const id="dl_9a46f36286e44680a931";
export const url=new URL("../icons/gradient-light.svg?v=89319bc2b261ddf30b362a28101ac4ccf6bf28592c6cbab6f0c9367e40abd649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
