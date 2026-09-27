export const name="media_bluetooth_off-fill";
export const id="dl_e53641d735b4e5af2a8f";
export const url=new URL("../icons/media_bluetooth_off-fill.svg?v=d0f4ba297198508f330e75e4af104f25b0f6786f619b3dafe137c2ff63251057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
