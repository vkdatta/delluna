export const name="microphone-slash-duotone";
export const id="dl_8bc479359d8446bcb2c6";
export const url=new URL("../icons/microphone-slash-duotone.svg?v=ca4f279ed69c23b87fafe5d0807d6409635882d4fe02438e608f42b958de5cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
