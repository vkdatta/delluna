export const name="dice-four-fill";
export const id="dl_c802c9cffa374e149cc2";
export const url=new URL("../icons/dice-four-fill.svg?v=5955fb83e188f1cbdf2777a39609825e6451da9be7ccbb7026abc5d798f46208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
