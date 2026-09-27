export const name="contact_emergency";
export const id="dl_61a58f37ef8f3722344f";
export const url=new URL("../icons/contact_emergency.svg?v=ccc32c9b1edf96f83da548b2b2aa1d3feeb224c36915372a8fcde8bbf6ec9db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
