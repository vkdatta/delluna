export const name="chat-circle-slash-thin";
export const id="dl_ea122442dee541d8bf05";
export const url=new URL("../icons/chat-circle-slash-thin.svg?v=8831ee2542abf5d8eaff5828b416c3387aa090040eb54f77c2eda7b6472deba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
