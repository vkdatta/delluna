export const name="flame-light";
export const id="dl_526bd1d000174b86810c";
export const url=new URL("../icons/flame-light.svg?v=64d25509004963c4b59dac0aed35425ac42273c755ba7d1f21ca857f19e293d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
