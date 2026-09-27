export const name="emergency_recording-fill";
export const id="dl_73408082cf57e888246b";
export const url=new URL("../icons/emergency_recording-fill.svg?v=a1b7e943b1b06597508a7842ea38ca41ded3aab25752677ececceeafe4f2cefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
