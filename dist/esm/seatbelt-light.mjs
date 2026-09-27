export const name="seatbelt-light";
export const id="dl_64d1be943c72767f6f78";
export const url=new URL("../icons/seatbelt-light.svg?v=d447c30e9383c29c9b331b69db4eb8782f57ad2b340234562b3933ad5b7cef61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
