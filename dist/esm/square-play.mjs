export const name="square-play";
export const id="dl_d2c0defc60124e2f8b35";
export const url=new URL("../icons/square-play.svg?v=4141a1adee0f3c1285ed94030a91ae9c08b199e9a714954a9624fe918633cdf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
