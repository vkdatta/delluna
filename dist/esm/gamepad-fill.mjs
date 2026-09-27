export const name="gamepad-fill";
export const id="dl_7850055ba8c5ae81b934";
export const url=new URL("../icons/gamepad-fill.svg?v=8fae68995dab52a777152a1dd439839a5c77bf065f4f82ba23ca78b8f17ab01b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
