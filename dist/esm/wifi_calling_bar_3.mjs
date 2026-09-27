export const name="wifi_calling_bar_3";
export const id="dl_51a2a7b0d3bb16ba61da";
export const url=new URL("../icons/wifi_calling_bar_3.svg?v=b3953b5c612f346547597292650a7724d72069aec18ff1deb98b3a809dccbdbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
