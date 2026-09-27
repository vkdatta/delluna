export const name="speech_to_text-fill";
export const id="dl_e8dde046ca16838eb303";
export const url=new URL("../icons/speech_to_text-fill.svg?v=abf1c55c834512b0657f96e501f435cd301100967c5c4e2d1dc4171b6f527713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
