export const name="stars";
export const id="dl_77d2bf563174e39fbf83";
export const url=new URL("../icons/stars.svg?v=e994f028cb031d98625fec27908a52c6b0b705c536095f86bc33ceced007bec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
