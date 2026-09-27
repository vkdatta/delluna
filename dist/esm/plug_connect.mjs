export const name="plug_connect";
export const id="dl_e843f363cc89a080649d";
export const url=new URL("../icons/plug_connect.svg?v=67f4e9f87a48ca93140f3b08452157fd06400f15df0e2e6a953d7759168e18c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
