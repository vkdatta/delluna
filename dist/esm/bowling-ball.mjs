export const name="bowling-ball";
export const id="dl_ba3618fca72c4dc99d34";
export const url=new URL("../icons/bowling-ball.svg?v=48b810d5e42b7566b77a50b9a4ca14f2bd5d4d5096afef99ede7598a3563f828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
