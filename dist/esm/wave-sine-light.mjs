export const name="wave-sine-light";
export const id="dl_07aa4883094f4af2ae42";
export const url=new URL("../icons/W/wave-sine-light.svg?v=ab6c4b0fb42d51757ce346b74bb6535c0ee34bc6fbbe4af870f2265c011f1254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
