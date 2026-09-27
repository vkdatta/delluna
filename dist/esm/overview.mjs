export const name="overview";
export const id="dl_2e6e6452475dbc767c20";
export const url=new URL("../icons/overview.svg?v=53f25cec5c25a5395034f43125bcb083bfe9e3ef01ecb7e86e9d965d6391367d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
