export const name="hourglass-high-fill";
export const id="dl_01eecd5bb5e6463889e0";
export const url=new URL("../icons/hourglass-high-fill.svg?v=5feb36da8895e439e6ed37edc4c1d666ba2ba356b7c415e6b50a0df6f084b6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
