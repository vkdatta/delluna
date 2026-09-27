export const name="lock-simple-open-bold";
export const id="dl_bf7b57bddd7548719a20";
export const url=new URL("../icons/lock-simple-open-bold.svg?v=0352ebc8be85ac9d60880f86472906d9c095abe75b84a53539488ff276579a7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
