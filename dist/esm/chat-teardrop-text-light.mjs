export const name="chat-teardrop-text-light";
export const id="dl_38a260cd266647159914";
export const url=new URL("../icons/chat-teardrop-text-light.svg?v=f740cb1953c0b738da7940c082e4140c26379f9c538f4c5283faedefdcf9c5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
