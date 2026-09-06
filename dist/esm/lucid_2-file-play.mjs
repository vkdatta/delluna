export const name="lucid_2-file-play";
export const id="dl_797b7252a1ce40b6944c";
export const url=new URL("../icons/lucid_2-file-play.svg?v=53b1c2536ccfd254ceb9e9713a2f0cef0edf5cfe3c09578007eb047dc87de16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
