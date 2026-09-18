export const name="gamepad_circle_right-fill";
export const id="dl_14a173b6462541209b3f";
export const url=new URL("../icons/gamepad_circle_right-fill.svg?v=35975792c884f3655802ea5dcc1bd7e2076f87aad0a7b9dccb82d69e206c8404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
