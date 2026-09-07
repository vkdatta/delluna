export const name="speaker-low";
export const id="dl_2a9a8f54f77a412f950a";
export const url=new URL("../icons/S/speaker-low.svg?v=e8f30ca16e03c397ead5c26416ab3064bdcef0d64762f9255e24e629a5eaa4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
