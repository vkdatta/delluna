export const name="weather_mix";
export const id="dl_dacb3b1fa087ef12376a";
export const url=new URL("../icons/weather_mix.svg?v=f26a67d78c05664954fffef5cbcc3ef64f4491e6b959f15d6508b7d33895bfc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
