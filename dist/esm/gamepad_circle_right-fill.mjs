export const name="gamepad_circle_right-fill";
export const id="dl_7ac397b38381430acb72";
export const url=new URL("../icons/gamepad_circle_right-fill.svg?v=de6b93606f883f223a9351d5ea4916c9c3df00ea8c714f5e5f16ebc13f9c4467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
