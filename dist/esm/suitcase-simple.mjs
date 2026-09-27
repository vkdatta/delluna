export const name="suitcase-simple";
export const id="dl_d42ce5d3b1e5ee7ab6a5";
export const url=new URL("../icons/suitcase-simple.svg?v=9f101c8de14c60752e2eea35e111f6cd5f0deb3e958046807ef64fdf88586a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
