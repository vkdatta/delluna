export const name="hourglass-simple-light";
export const id="dl_a9e0f68f62944aaebcee";
export const url=new URL("../icons/hourglass-simple-light.svg?v=9a8f77b7b8921e7e9c1279f382724499bce3c8f7675c8bbc4e05caa4d9ed7ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
