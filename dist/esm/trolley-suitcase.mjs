export const name="trolley-suitcase";
export const id="dl_eaab2a586b134b867212";
export const url=new URL("../icons/trolley-suitcase.svg?v=f72e0fe7142b32bd9b51d92680ec6e185a3cc96588d057e5e0b9a4b8bbdfac65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
