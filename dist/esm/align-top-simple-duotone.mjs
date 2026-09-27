export const name="align-top-simple-duotone";
export const id="dl_8f8f042a00a8496aa83c";
export const url=new URL("../icons/align-top-simple-duotone.svg?v=1b07f347983b848884f671b4df4f17976122de4f3daa852798272e6133e7de97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
