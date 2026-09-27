export const name="dots-three-outline-light";
export const id="dl_58a6a3aadfb44e7884a6";
export const url=new URL("../icons/dots-three-outline-light.svg?v=53194a8b7f71ab339c75993a35c5cfd20aa83e3e6bd5ac13026950c3cbf7aff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
