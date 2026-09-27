export const name="lucid_3-shield-x";
export const id="dl_4fd11011972f46ca9928";
export const url=new URL("../icons/lucid_3-shield-x.svg?v=9d82bb9e7217b92760b25e1ff8a7f7f4fe6cc525d41b2f1821d68291e6f1729d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
