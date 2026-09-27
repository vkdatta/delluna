export const name="instagram-logo";
export const id="dl_ea049ec1aac443c4bdc2";
export const url=new URL("../icons/instagram-logo.svg?v=cc55eab906386c6c1cd792b6b05984fc5c2a37a52ca4afd374ba62b781c2e3af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
