export const name="file-video-duotone";
export const id="dl_beb73a7c878e4ca5bf34";
export const url=new URL("../icons/file-video-duotone.svg?v=93a0363c3200756b2496d4e2e663e2ed7bdea2e3dcddc7c8eef4ba3c883c918a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
