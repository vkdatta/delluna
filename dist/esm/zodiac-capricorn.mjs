export const name="zodiac-capricorn";
export const id="dl_4315389c79e44f598360";
export const url=new URL("../icons/zodiac-capricorn.svg?v=adb28c236613e0dae079b94eb80326dcb21b733c1d59df8fbc35602c4db27790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
