export const name="conversation";
export const id="dl_5476c65e914c73894d6c";
export const url=new URL("../icons/conversation.svg?v=601df4e0ede930793fb6ded5335e15f89de5989510706b9c0002e899ecd210e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
