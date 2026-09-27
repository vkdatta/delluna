export const name="zodiac-capricorn";
export const id="dl_4315389c79e44f598360";
export const url=new URL("../icons/zodiac-capricorn.svg?v=fd7e82780b58c266c9a2d43cd774a5ff0061655423ec1279c34f2fd13ef46191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
