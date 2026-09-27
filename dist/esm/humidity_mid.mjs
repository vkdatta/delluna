export const name="humidity_mid";
export const id="dl_8921703e28db673cf97e";
export const url=new URL("../icons/humidity_mid.svg?v=ecaad11bf58c2025f2c8c358451f462a28b800319550e1853cb786b32a8a406f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
