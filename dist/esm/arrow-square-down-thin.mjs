export const name="arrow-square-down-thin";
export const id="dl_2bb5b2c0f56a4d6f904c";
export const url=new URL("../icons/arrow-square-down-thin.svg?v=217796bb9c05c7d55c21131447a98bcf25e5c3c11f192876863b18ec58a06c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
