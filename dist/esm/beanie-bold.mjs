export const name="beanie-bold";
export const id="dl_6455088c44dd484ea7cc";
export const url=new URL("../icons/beanie-bold.svg?v=eaedb580fcf5fa5f6eddd39c868ce6628c45c9a4125fc7f5cfcbf2805e7ac2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
