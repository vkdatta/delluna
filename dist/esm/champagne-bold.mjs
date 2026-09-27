export const name="champagne-bold";
export const id="dl_3f0173807a08495eabab";
export const url=new URL("../icons/champagne-bold.svg?v=0b075c511724bb5155c0d2eaaf40730f6e90cdd44e6120bd608b60ae9ef33271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
