export const name="google-podcasts-logo-thin";
export const id="dl_a4178729a4d04267b756";
export const url=new URL("../icons/google-podcasts-logo-thin.svg?v=381b46276e58f02b409e8ecb04971fe8db02b2a1b44f8ae8407dc04916918be6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
