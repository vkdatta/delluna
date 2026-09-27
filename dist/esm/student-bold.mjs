export const name="student-bold";
export const id="dl_9a663f39ff3a329c9bb1";
export const url=new URL("../icons/student-bold.svg?v=4414f29a486d8e9e230340d4e82189cc8f0b4ebe78d6f9e04470a65c5493ee37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
