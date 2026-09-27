export const name="bell-slash";
export const id="dl_2b0b6f0e0557426e8d25";
export const url=new URL("../icons/bell-slash.svg?v=e33e5a6dc15180b52f582cefb8b75703c16b2255f46b856439263ecfefe4ef19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
