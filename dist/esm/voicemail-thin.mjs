export const name="voicemail-thin";
export const id="dl_0db9eb92bbd439bf4a46";
export const url=new URL("../icons/voicemail-thin.svg?v=36179732889407ebc77d8a6f3d004dc3b18b4f0965f6abe6410b9cb06a48b6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
