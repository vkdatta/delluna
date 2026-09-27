export const name="arrows-vertical";
export const id="dl_b4d89d8c7b454eb3ae48";
export const url=new URL("../icons/arrows-vertical.svg?v=d751fc58b3eb4674024f4ca02e2e195d53438ccf63dc308d69ca5f24de49880f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
