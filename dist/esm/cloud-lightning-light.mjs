export const name="cloud-lightning-light";
export const id="dl_9195e24d8f5f4a488269";
export const url=new URL("../icons/cloud-lightning-light.svg?v=6f68c311fe9df3a3e9f8414d290689ae708667225049a1ab5c488f6252c62af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
