export const name="dice-one";
export const id="dl_0e4ca1612bb5457fb956";
export const url=new URL("../icons/dice-one.svg?v=efcd5bda8b5fa23b119781cdfe76e981cf311dfa9976e996a9d4048ea28d0cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
