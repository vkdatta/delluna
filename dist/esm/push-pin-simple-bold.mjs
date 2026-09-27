export const name="push-pin-simple-bold";
export const id="dl_c68f36b34c284e4b9eb8";
export const url=new URL("../icons/push-pin-simple-bold.svg?v=f4935e752d1d8faf81a0848bd5e59b570b28e44d9c9a4a6c8d7b9950c3da31a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
