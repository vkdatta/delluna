export const name="lucid_2-folder-up";
export const id="dl_4eb426104ee64160a087";
export const url=new URL("../icons/lucid_2-folder-up.svg?v=d3a4e7241f3dafaef6bfdd3231970515d49f2b88ea36db09181a94c330020881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
