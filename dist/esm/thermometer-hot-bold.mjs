export const name="thermometer-hot-bold";
export const id="dl_70096c69361341d5556c";
export const url=new URL("../icons/thermometer-hot-bold.svg?v=eaefc21b165d92e4a38df65983770739cc470471f1a8f697b387b1babfbbab9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
