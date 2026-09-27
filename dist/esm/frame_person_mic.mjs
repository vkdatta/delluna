export const name="frame_person_mic";
export const id="dl_6cc811b5707b42d4c94e";
export const url=new URL("../icons/frame_person_mic.svg?v=ea181c356d030b8c4cdc3b4243391de7090744956cacc9511fa489090179f5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
