export const name="arrow-bend-double-up-right";
export const id="dl_8153cf497b64422a8305";
export const url=new URL("../icons/arrow-bend-double-up-right.svg?v=4e2425f39b767af79e692ccb19f05d0cc2122d0d6af71977e16998396b400541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
