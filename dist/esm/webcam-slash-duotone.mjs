export const name="webcam-slash-duotone";
export const id="dl_283ee3a6c993c2480794";
export const url=new URL("../icons/webcam-slash-duotone.svg?v=5abe5d88378ca7e55bd5d2ae0fe46cf9b26277e15360b51449bb2d47c9fbdf7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
