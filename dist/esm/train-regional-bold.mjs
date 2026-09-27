export const name="train-regional-bold";
export const id="dl_0cd2fab69e4506356433";
export const url=new URL("../icons/train-regional-bold.svg?v=259c0005adc3c7b2565e06503d149ebc20e4c1df71ee680b394fd88754d19aa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
