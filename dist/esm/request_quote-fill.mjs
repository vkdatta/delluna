export const name="request_quote-fill";
export const id="dl_a94acd33326087987765";
export const url=new URL("../icons/request_quote-fill.svg?v=2cb47967b2a2c9c127e645652edc12d621772774b529c970be9b837e21e6b794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
