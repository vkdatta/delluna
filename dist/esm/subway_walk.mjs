export const name="subway_walk";
export const id="dl_c4d83b5462f044549408";
export const url=new URL("../icons/subway_walk.svg?v=3fb05513a01b4b21e245df269799e97439a8934ced484533c6110727779d6f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
