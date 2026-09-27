export const name="replace_audio-fill";
export const id="dl_ce57e4114679cd128334";
export const url=new URL("../icons/replace_audio-fill.svg?v=a455a00778a66bd9102cbd8d3afa7e37ecc6c28760e5c976a1a3b260f9a255ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
