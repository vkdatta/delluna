export const name="command-bold";
export const id="dl_9658d40975b840219427";
export const url=new URL("../icons/command-bold.svg?v=30cddf265851b709ad6ce833605b0d6ca3e6c3cac0b312e6e204cef90897e072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
