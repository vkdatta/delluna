export const name="airplane";
export const id="dl_a7997e874b5343fbb2ba";
export const url=new URL("../icons/airplane.svg?v=20e608ca0bd3080b71308179a1d17cd8a513662a6c022b4511dcd7ed0b7c4b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
