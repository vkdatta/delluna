export const name="square-user";
export const id="dl_5a753f51990f475b8320";
export const url=new URL("../icons/square-user.svg?v=14d2fcbaf72d990fff8c592a71ad5dda1df9799f745e826a18ec6d787f0fa9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
