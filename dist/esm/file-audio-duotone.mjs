export const name="file-audio-duotone";
export const id="dl_725fa813ca5a4d45b9f7";
export const url=new URL("../icons/file-audio-duotone.svg?v=38bd7e1976ce3af5a232985145c4c6912ad26bc6e1f88746ed8a796d4e173c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
