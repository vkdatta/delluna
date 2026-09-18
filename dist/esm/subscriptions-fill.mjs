export const name="subscriptions-fill";
export const id="dl_c9e3e79b0af54311b8c5";
export const url=new URL("../icons/subscriptions-fill.svg?v=b8d43cf0f29c22ad7011a9a8791838342a96665295a51b5ccaee9db517c1491e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
