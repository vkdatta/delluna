export const name="number-nine-light";
export const id="dl_5dcd6af46bea4e2ea0a8";
export const url=new URL("../icons/number-nine-light.svg?v=71a57d8b068ae12030d44f4ac49a19210ddf2a85d1a9e040713246ec798c3615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
