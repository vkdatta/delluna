export const name="computer";
export const id="dl_8b7bfca030ec68688730";
export const url=new URL("../icons/computer.svg?v=e9e55dfa37c5cf1fbf29a74d2efce201cc5bcb0a39ce7c799ce61fdb6ddf13d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
