export const name="timer_off";
export const id="dl_d4c9a3e014366ec1bdf5";
export const url=new URL("../icons/timer_off.svg?v=a992f75156df97326b88085db33dbb5a9fd19076a84bbaf0d3bc48809517d4be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
