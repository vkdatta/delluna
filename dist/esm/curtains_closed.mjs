export const name="curtains_closed";
export const id="dl_18eb7a5fe18b8ebf374a";
export const url=new URL("../icons/curtains_closed.svg?v=a5387f76387066f675b70a19cfd415e9ad5897880b912efbdd1db11062794e26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
