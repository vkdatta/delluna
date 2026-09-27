export const name="remove_moderator-fill";
export const id="dl_d0d3d9e0236db7fe1183";
export const url=new URL("../icons/remove_moderator-fill.svg?v=7142072b2cd6dcc1820d7eb1f24fc19ad212d392a27bf109c27a05374d011f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
