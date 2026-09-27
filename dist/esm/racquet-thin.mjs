export const name="racquet-thin";
export const id="dl_29edecd31ddc46758df2";
export const url=new URL("../icons/racquet-thin.svg?v=9dc4fb50313a3dc9904d1a68b60078d0adc641baaba49e6042c62b9682a9e590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
