export const name="arrow-line-left";
export const id="dl_8127702795d74ec38bb2";
export const url=new URL("../icons/arrow-line-left.svg?v=16e90c53e95acfc68035d93aeacf4b359451037d8bc22fbb40d8f65bd8ba49d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
