export const name="hand-thin";
export const id="dl_83ec0a2555ac4164a001";
export const url=new URL("../icons/hand-thin.svg?v=0c4fa90135637325d9a9a7a81a2de0d170d6f00c7fc913b2bc657e2b57690465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
