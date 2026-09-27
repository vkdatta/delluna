export const name="room_preferences";
export const id="dl_0fdcde8c1052d9e1e635";
export const url=new URL("../icons/room_preferences.svg?v=a0e2cd119ac091acd35b300031afe650f2ee20d461d4d4ebba28a0ff4b5127f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
