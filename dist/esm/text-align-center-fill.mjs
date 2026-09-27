export const name="text-align-center-fill";
export const id="dl_0ea8b4da3a07bff0bf0b";
export const url=new URL("../icons/text-align-center-fill.svg?v=5e378b2a567dfb0ef9badbf00723ef9a04719af89ca62d7568563ab8e96b429d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
