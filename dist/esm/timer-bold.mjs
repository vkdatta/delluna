export const name="timer-bold";
export const id="dl_71dd664b46a7c72f7ffa";
export const url=new URL("../icons/timer-bold.svg?v=114fad0979e3b9e43127e7f1446d9b0e302eedb14169945bea5c44c2c429b045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
