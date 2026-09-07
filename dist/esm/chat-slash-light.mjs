export const name="chat-slash-light";
export const id="dl_e2a58036d98042e38bfe";
export const url=new URL("../icons/chat-slash-light.svg?v=d889eef97c8838f8922d808b1706620c35264fa5d3f4652b78b43f660718b8d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
