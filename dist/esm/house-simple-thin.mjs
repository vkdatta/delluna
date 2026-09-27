export const name="house-simple-thin";
export const id="dl_7981f8818d2f45b0aec8";
export const url=new URL("../icons/house-simple-thin.svg?v=7533bc10df6006c5f50e08a6795a1be6fdabc04bea226a0fe02414ab12fed1be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
