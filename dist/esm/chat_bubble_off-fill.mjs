export const name="chat_bubble_off-fill";
export const id="dl_1cf8dfb4e6be44adbfe3";
export const url=new URL("../icons/chat_bubble_off-fill.svg?v=12489d15e51070b6bf390a336647a65c16e2faeea3cda69fe9409f911ac6d4b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
