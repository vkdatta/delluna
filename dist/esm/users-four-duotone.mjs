export const name="users-four-duotone";
export const id="dl_b8b90395bf4f4d91ac3b";
export const url=new URL("../icons/U/users-four-duotone.svg?v=a1cb868ed94e99afd9341492debac065127312e01b27b61030989f6f4cfd0a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
