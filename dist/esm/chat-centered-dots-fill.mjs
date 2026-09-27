export const name="chat-centered-dots-fill";
export const id="dl_f2e1251915f5469e98ed";
export const url=new URL("../icons/chat-centered-dots-fill.svg?v=4fef33212563de49862b37b4f13c1bb7b99a1c5972e13a0e225ed50bc09431a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
