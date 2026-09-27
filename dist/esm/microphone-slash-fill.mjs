export const name="microphone-slash-fill";
export const id="dl_7ef5816d391143d3bb06";
export const url=new URL("../icons/microphone-slash-fill.svg?v=300bc171fe3826eb390534a4627c158c700f5cd0c3dc1c535466a2a64139e374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
