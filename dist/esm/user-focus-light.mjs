export const name="user-focus-light";
export const id="dl_5d60e2bd90fb3579bec9";
export const url=new URL("../icons/user-focus-light.svg?v=5929fe7944f0a6220c986db80d4b22ef44fb32193918423d45d465786f9f6a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
