export const name="tray-arrow-down-bold";
export const id="dl_1b1fed9b66ce6d9f6701";
export const url=new URL("../icons/tray-arrow-down-bold.svg?v=cb99ebc32741c622058d7865b213cf58467da10ac905a9719daa1b9c77acf065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
