export const name="beanie-thin";
export const id="dl_c8fa661e3fe5460dbbd2";
export const url=new URL("../icons/beanie-thin.svg?v=cf83440abf5a90042f67b7f8e7163c6fec6d55fb828c5999dbb5094df897dd55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
