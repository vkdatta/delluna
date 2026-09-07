export const name="chat-dots-fill";
export const id="dl_13c097829bc445578327";
export const url=new URL("../icons/chat-dots-fill.svg?v=dcd5a60e1ff4014f53eaca5930848a4eef919185f758be7b19f3a0f2440d9ff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
