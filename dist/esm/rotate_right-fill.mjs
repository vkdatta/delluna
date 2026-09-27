export const name="rotate_right-fill";
export const id="dl_1a63340d8a187b6915f8";
export const url=new URL("../icons/rotate_right-fill.svg?v=0476960832e04682eef0a7657ddfdf10724c3cdc75ef8b9e08c638d6b9f50439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
