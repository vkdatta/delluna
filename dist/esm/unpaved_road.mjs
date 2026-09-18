export const name="unpaved_road";
export const id="dl_0b8ee07b11dc4d6ea401";
export const url=new URL("../icons/unpaved_road.svg?v=4ddb8b4dd77f833f85191d53b6f9432cc1d3df3f3447a8214ce73cd0c4b1adfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
