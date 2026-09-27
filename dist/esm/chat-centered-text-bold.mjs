export const name="chat-centered-text-bold";
export const id="dl_1af2d0410bc24ab2b68c";
export const url=new URL("../icons/chat-centered-text-bold.svg?v=45ef50bb856fdc69d2d2797619c44b51ed47d9d984af44e5c77edb7f3f005666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
