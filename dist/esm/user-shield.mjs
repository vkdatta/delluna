export const name="user-shield";
export const id="dl_5906a117a3074f4fa391";
export const url=new URL("../icons/user-shield.svg?v=a277877202be52ee8c130c4fe64c84ea4c9134038e9376b9ef44ea98b1d8371f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
