export const name="hand-withdraw";
export const id="dl_3e7651742dfd47f0ae0c";
export const url=new URL("../icons/hand-withdraw.svg?v=a66275666e335318ec7c7ad6b08b922512a90b3e8dd016f5f87e9c75ab1de169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
