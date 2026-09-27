export const name="tabs-light";
export const id="dl_6ef44c47d140e84dbdf3";
export const url=new URL("../icons/tabs-light.svg?v=f7e3fae62671d1b9b026d932b9f87e36b9ff6c61042389bf3ce87ff25e1b500f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
