export const name="eyes-bold";
export const id="dl_b894651ee73649fe85dc";
export const url=new URL("../icons/eyes-bold.svg?v=1b5bb71ff87f3c0e1454a92cc7294319a0434eb81d51ba2458364fce564da9d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
