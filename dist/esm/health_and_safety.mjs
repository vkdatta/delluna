export const name="health_and_safety";
export const id="dl_f9515617b6ce758d791b";
export const url=new URL("../icons/health_and_safety.svg?v=f7f3e3bbafdbce281448f6c79919cc843b3552e96305c80b449bbbb710159798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
