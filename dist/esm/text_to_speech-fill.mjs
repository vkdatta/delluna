export const name="text_to_speech-fill";
export const id="dl_479b3472b39f9a524b27";
export const url=new URL("../icons/text_to_speech-fill.svg?v=cef6d5e57868daec56373ac29855f5ff2ad44204f9e82f6c5f3d6323797fa822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
