export const name="megaphone-bold";
export const id="dl_61d93709300043718f7f";
export const url=new URL("../icons/megaphone-bold.svg?v=0d177b546f802f386a99bcd7104e9f6077c1dac6aee31a9b52c262f2853db274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
