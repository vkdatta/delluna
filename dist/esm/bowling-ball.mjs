export const name="bowling-ball";
export const id="dl_ba3618fca72c4dc99d34";
export const url=new URL("../icons/bowling-ball.svg?v=04df47d3da86c1fd3b950a116810e22d5dcf991969c4e2b2175d2b8a98b05d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
