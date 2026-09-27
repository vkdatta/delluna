export const name="number-four-bold";
export const id="dl_dc599179f7d443598f82";
export const url=new URL("../icons/number-four-bold.svg?v=dfdead3b9c61ed669a772a160aaefc817d66eb345f1fa70a6451fc2b4719d457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
