export const name="wrench-off";
export const id="dl_94e746d8452641a78b2d";
export const url=new URL("../icons/wrench-off.svg?v=3af4e2f6c7394e89a1f8e5b564e4c7876ce4d0cdb3738763719d4699ae44b1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
