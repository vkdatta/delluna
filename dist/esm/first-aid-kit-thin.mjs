export const name="first-aid-kit-thin";
export const id="dl_350c056971654f03a198";
export const url=new URL("../icons/first-aid-kit-thin.svg?v=996d5bc60e051ce64e9f1759a180f05570da0762df56cc8540b09cdb0c9704f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
