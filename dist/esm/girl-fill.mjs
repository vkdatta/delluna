export const name="girl-fill";
export const id="dl_be7135a8f18072503d49";
export const url=new URL("../icons/girl-fill.svg?v=f0c194fa18ed2c979714a1f332c5f95454169b74c12c17f436caeeaaf20e371f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
