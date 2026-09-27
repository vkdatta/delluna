export const name="dice-one-bold";
export const id="dl_93047aac7e17434c9664";
export const url=new URL("../icons/dice-one-bold.svg?v=ed0cc87543ce5388bd18dc6e7c2b78d57e26dd2ae76c41095a18fc92cbfdb377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
