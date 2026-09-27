export const name="hand-peace-thin";
export const id="dl_2f7ad8b396734994a98f";
export const url=new URL("../icons/hand-peace-thin.svg?v=eeaf7ed007f265ba0ab7d4e26834b18107e315778280a1ebf7d356c9e3b82507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
