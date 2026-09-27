export const name="champagne-light";
export const id="dl_4f7303904c5c404ea9f9";
export const url=new URL("../icons/champagne-light.svg?v=5e8d8dfb918f788e6f82944b628cabe5b4b4d5c1a8f1ec8b48facc9748b18ca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
