export const name="chat-circle-slash-thin";
export const id="dl_ea122442dee541d8bf05";
export const url=new URL("../icons/chat-circle-slash-thin.svg?v=2e89a1c763a4fe1a50e61434d01433200badc79b30aab915c4a829790d9d4ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
