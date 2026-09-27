export const name="earbud_right-fill";
export const id="dl_6d108b615eba88e825c7";
export const url=new URL("../icons/earbud_right-fill.svg?v=361b8d0bcc9e3a8874961ade621e1a2ed3b7805576c961271d9c0dc11f541e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
