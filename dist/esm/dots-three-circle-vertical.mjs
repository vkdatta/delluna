export const name="dots-three-circle-vertical";
export const id="dl_9d8df1592827405580f8";
export const url=new URL("../icons/dots-three-circle-vertical.svg?v=0dbd9bc85b7554b5269f8d7637850d705f03d7b627a2bd5091ec697f02d0c4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
