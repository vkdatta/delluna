export const name="lucid_2-hamburger";
export const id="dl_69181a2999ae450ba230";
export const url=new URL("../icons/lucid_2-hamburger.svg?v=2cefd5829f6bed1239a502bbc7ed9c6c3f88913e9c6a74cbb7da49a27bbd2500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
