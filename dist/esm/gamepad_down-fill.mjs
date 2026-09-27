export const name="gamepad_down-fill";
export const id="dl_fce70d1292e438d4405b";
export const url=new URL("../icons/gamepad_down-fill.svg?v=e63579d04dc0655b0aa946c60554b169bc4516f758c087d1fb9312dfe81f8d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
