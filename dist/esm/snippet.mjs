export const name="snippet";
export const id="dl_8feeb6ca45654487b6d4";
export const url=new URL("../icons/snippet.svg?v=b06cd62288c3dbc26ae60563bf88e35a49f03f79b5d66ce0800f31d1f290bb2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
