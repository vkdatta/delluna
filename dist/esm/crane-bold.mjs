export const name="crane-bold";
export const id="dl_26746ecd48bb4381b05d";
export const url=new URL("../icons/crane-bold.svg?v=d76ba6d6af4fc217e4186917242d7b5f1e339d15fa3d4654e7af557169243d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
