export const name="lucid_3-message-circle-heart";
export const id="dl_3a6e94e4b72440059e66";
export const url=new URL("../icons/lucid_3-message-circle-heart.svg?v=22ce17e86e946c48abd0853ced15b77c412221563d74b1712c37b4369ec27b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
