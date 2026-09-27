export const name="bowling-ball";
export const id="dl_ba3618fca72c4dc99d34";
export const url=new URL("../icons/bowling-ball.svg?v=0d949e310494bcc88c1c88106f3f69a00e816ee44b400c73de626348a7088a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
