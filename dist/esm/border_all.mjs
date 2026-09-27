export const name="border_all";
export const id="dl_80ff19520d32e2c18146";
export const url=new URL("../icons/border_all.svg?v=c4b731ed3ea62bad9ade4882dcec64dbd128e8a14cb44ed9e728e792bdcc98e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
