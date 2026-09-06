export const name="lucid_3-mouse-pointer-2-off";
export const id="dl_de8233360b2b4c34b250";
export const url=new URL("../icons/lucid_3-mouse-pointer-2-off.svg?v=e43e6b29c1acb08fb6063a7e074720754bbc2abe54a8d35a1f2f8298b7605a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
