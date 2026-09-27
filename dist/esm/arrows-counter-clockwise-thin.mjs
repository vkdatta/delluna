export const name="arrows-counter-clockwise-thin";
export const id="dl_a4a4ba23b783405eb115";
export const url=new URL("../icons/arrows-counter-clockwise-thin.svg?v=f13d26862e5caf393e6fb6d0a7c431a1452bc9d0c133721ca9890a78557fecec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
