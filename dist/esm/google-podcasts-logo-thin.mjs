export const name="google-podcasts-logo-thin";
export const id="dl_a4178729a4d04267b756";
export const url=new URL("../icons/google-podcasts-logo-thin.svg?v=93e1d576e3c736a3eba5d8a40335931257931e7c78d6685b3b1a571fd3220777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
