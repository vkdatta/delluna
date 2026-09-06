export const name="lucid_3-message-square-heart";
export const id="dl_c5ca3c6cd98544eaa054";
export const url=new URL("../icons/lucid_3-message-square-heart.svg?v=b54895fb8b43364bc7e64da334cec02787686a5e261176d9f0ca7aa1ef7720ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
