export const name="chat-centered-text-fill";
export const id="dl_3e0bda94f4aa48a4887a";
export const url=new URL("../icons/chat-centered-text-fill.svg?v=54171ca052a1c5b2a680578b63516b0eda43b3a65251db288afd6b328202586d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
