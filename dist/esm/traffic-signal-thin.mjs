export const name="traffic-signal-thin";
export const id="dl_ea6643bf3f7fdf54cfed";
export const url=new URL("../icons/traffic-signal-thin.svg?v=f4b8917d4f32978c7e138e341f3ee60ad47970d50b13ed020735b89bdf5be340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
