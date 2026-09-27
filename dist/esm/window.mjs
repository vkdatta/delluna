export const name="window";
export const id="dl_1dc78726f43e41e592d5";
export const url=new URL("../icons/window.svg?v=c4e88510cb006f1a395379b931ce3c0fb7702285e8f8869036e66411ee8edcae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
