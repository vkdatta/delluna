export const name="qr-code-bold";
export const id="dl_5fabf208b1a449018f53";
export const url=new URL("../icons/qr-code-bold.svg?v=f24305fa439f354a59032d6b35d878d58579fa529d661a6a89b0299550a4afc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
