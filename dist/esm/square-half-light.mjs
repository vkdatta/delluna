export const name="square-half-light";
export const id="dl_f8674e691ba6507f1e77";
export const url=new URL("../icons/square-half-light.svg?v=4dd8c5580e8501d551d13859d7e8a6d0b06f0e261ee9ecc50515eb08e962af52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
