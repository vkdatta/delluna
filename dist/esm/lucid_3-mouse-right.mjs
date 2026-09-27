export const name="lucid_3-mouse-right";
export const id="dl_f8345c58a23f4edaa000";
export const url=new URL("../icons/lucid_3-mouse-right.svg?v=e93b02682484d1d08fa0853469e089a289f3beaf2f712c6a3fc2c2dcd4dfdcf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
