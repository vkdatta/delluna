export const name="lucid_1-app-window";
export const id="dl_71ded04ce09a49d0bd2a";
export const url=new URL("../icons/lucid_1-app-window.svg?v=ff990c3648646339f9ca2801a91f11f10d4712491a795ad9f8d02ac7e9b1b08e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
