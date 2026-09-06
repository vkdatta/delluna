export const name="chats-duotone";
export const id="dl_0bfcfb9770e2483e87f4";
export const url=new URL("../icons/chats-duotone.svg?v=e39ee9ab9d89128206ae31907d7c93e46ff5b96e67ad0e3a47b5fb80eba4c6d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
