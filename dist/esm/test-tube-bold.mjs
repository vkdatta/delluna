export const name="test-tube-bold";
export const id="dl_708e79ccc469ec4df84f";
export const url=new URL("../icons/test-tube-bold.svg?v=98ba74100d0ee2359405929ac394ec03869b58302e54d17f46e936c88abb8afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
