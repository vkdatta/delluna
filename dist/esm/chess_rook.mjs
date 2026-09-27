export const name="chess_rook";
export const id="dl_4a5df21ef23a954f3567";
export const url=new URL("../icons/chess_rook.svg?v=568c6fe9f8ba4495a2b3f1ed6a283b713d8b740de9a8132db424f69ddb017ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
