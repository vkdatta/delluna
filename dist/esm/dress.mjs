export const name="dress";
export const id="dl_4a08524b0306442c84ba";
export const url=new URL("../icons/dress.svg?v=3c28d8c1e21d0ac4401b33e99ded023b61f9d02e75baa0c6851fa218e39b6c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
