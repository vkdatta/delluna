export const name="twitch-logo-fill";
export const id="dl_5f69b0f5e7b175030a14";
export const url=new URL("../icons/twitch-logo-fill.svg?v=c36cab0299d1d7ad6bd9183d0c6af448cf87aeb306cf4086e29934d99e899c21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
