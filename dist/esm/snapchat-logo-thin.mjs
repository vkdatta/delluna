export const name="snapchat-logo-thin";
export const id="dl_31d8f60e3c5c44169e24";
export const url=new URL("../icons/S/snapchat-logo-thin.svg?v=4300a1b2e41c1b6b2c225d19a2d2047916f912d8e8e226554933e40174a461d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
