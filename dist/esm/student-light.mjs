export const name="student-light";
export const id="dl_5128881b212e52d05fcc";
export const url=new URL("../icons/student-light.svg?v=22d1394fdd3c0a43cc55edbd398ba538c081fd0168a884ba796c4a73a5609438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
