export const name="chat-centered-slash-fill";
export const id="dl_3b68eb7f58414f0b856f";
export const url=new URL("../icons/chat-centered-slash-fill.svg?v=f1159d94d9617245ae174f54c00cb0d939fc20fba3e7d9ac9409a562277baeed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
