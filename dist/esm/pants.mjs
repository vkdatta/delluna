export const name="pants";
export const id="dl_1c2ef596987147bda71b";
export const url=new URL("../icons/pants.svg?v=fc6a71111f52935436f9fd4f6a3bc1fb23f551590f1826cdf8a200fd7c3f2146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
