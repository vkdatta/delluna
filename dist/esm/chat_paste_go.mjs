export const name="chat_paste_go";
export const id="dl_b8508d204b5b46efaedf";
export const url=new URL("../icons/C/chat_paste_go.svg?v=095c28b1030092e9a240d0dd102fe14f4ff896a46c5ea0b801c6f7e9a9b19659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
