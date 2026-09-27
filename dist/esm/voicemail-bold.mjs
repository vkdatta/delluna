export const name="voicemail-bold";
export const id="dl_86085730443fe15749ce";
export const url=new URL("../icons/voicemail-bold.svg?v=2e57598f65221d4a42545bd4aa84d3a1c6a8054539e6b93bc38a2bb34af6dc9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
