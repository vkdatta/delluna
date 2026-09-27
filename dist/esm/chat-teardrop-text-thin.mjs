export const name="chat-teardrop-text-thin";
export const id="dl_559636b4f53446a68340";
export const url=new URL("../icons/chat-teardrop-text-thin.svg?v=5987fff8b3d21911844670930072a0abc4530c9823ed52459dea42ce7f0a1992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
