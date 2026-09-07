export const name="grains-light";
export const id="dl_2b37f930053d467b8e60";
export const url=new URL("../icons/grains-light.svg?v=594c8bdbf354625c4ff91ac8a6457ed7dc0abb7c3088e8886f39b7dc1c928f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
