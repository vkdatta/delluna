export const name="countertops";
export const id="dl_8d481bac782d4248a3cc";
export const url=new URL("../icons/countertops.svg?v=cb867c65e596db7430a87a43083f04b2a3b87e8ec6dea290c7b3c0a7fb198fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
