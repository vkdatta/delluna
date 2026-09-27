export const name="webhooks-logo-thin";
export const id="dl_7a8dc72a98ff4d350d4d";
export const url=new URL("../icons/webhooks-logo-thin.svg?v=382529b92b0226a1c8225797ebc8529fd52fc2ea26d58e5dfb16d8214b380a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
