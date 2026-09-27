export const name="robot_2-fill";
export const id="dl_7aaaa3e54d56f881827b";
export const url=new URL("../icons/robot_2-fill.svg?v=68cda3b012ddf0fad898a14183614d7d23fb523058c9266f2cb622e145615f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
