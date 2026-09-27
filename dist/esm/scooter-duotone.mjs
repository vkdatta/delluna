export const name="scooter-duotone";
export const id="dl_e89beb3b9eb3b75a8b6d";
export const url=new URL("../icons/scooter-duotone.svg?v=12c5677ae59422a43fbac3f624d5a783ae5a7ad0cda7480243e506067aa7d15c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
