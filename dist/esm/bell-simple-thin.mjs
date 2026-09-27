export const name="bell-simple-thin";
export const id="dl_7c2fefa87f61413fbf68";
export const url=new URL("../icons/bell-simple-thin.svg?v=e3f5047720b7034dd8c74fa3979ebdc9bdb016f75770ee6458dc184c58a619fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
