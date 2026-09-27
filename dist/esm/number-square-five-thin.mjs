export const name="number-square-five-thin";
export const id="dl_b06ef5b97abb42d48c32";
export const url=new URL("../icons/number-square-five-thin.svg?v=7e4a661ecc0a7cf02d7e8dcf244ea35ec9ad88b0157f82686e4e2acaf28011f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
