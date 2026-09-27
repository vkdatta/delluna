export const name="waving_hand";
export const id="dl_6f759b5e375ea64d91d1";
export const url=new URL("../icons/waving_hand.svg?v=faf41c24313949d609086457d2341e5a1876e9a4ed9735f7e563fde4e2531012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
