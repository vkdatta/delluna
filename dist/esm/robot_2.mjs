export const name="robot_2";
export const id="dl_117a2a5c4e198cad929a";
export const url=new URL("../icons/robot_2.svg?v=e9f791cb9aee435c4c3f32930ac60bd4bbf07e53a2059d7f65f7d6011137e76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
