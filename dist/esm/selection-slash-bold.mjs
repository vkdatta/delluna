export const name="selection-slash-bold";
export const id="dl_15a23f260d674b218c77";
export const url=new URL("../icons/S/selection-slash-bold.svg?v=f586397373cc317edf6c990998cb7569e2a3434ea013bffec47524ca34650106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
