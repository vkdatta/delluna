export const name="lucid_1-calendar-heart";
export const id="dl_6823a97799ba4e76bb34";
export const url=new URL("../icons/lucid_1-calendar-heart.svg?v=d3e8499e79886083e882b799dc740839a447a6e44a9f6d5bde8f4b89f047b18e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
