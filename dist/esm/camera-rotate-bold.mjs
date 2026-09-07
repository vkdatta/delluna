export const name="camera-rotate-bold";
export const id="dl_9e29b35abec742e8a16b";
export const url=new URL("../icons/camera-rotate-bold.svg?v=db3b3c147992b7a9da478696f5ea7d1fa2b5f7ef83efcb1aeded498dd0e8b64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
