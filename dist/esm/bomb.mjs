export const name="bomb";
export const id="dl_ee822b2b84e448a094d1";
export const url=new URL("../icons/bomb.svg?v=b63bde971c113ac1eca3f879487d1c442c8bcd48e5153dc67755e37405117b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
