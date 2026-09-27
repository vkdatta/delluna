export const name="bubble";
export const id="dl_3694e597f77f7e3dfa8f";
export const url=new URL("../icons/bubble.svg?v=ad82dd0c99c04ffe25394dd695743dc6622466043616c5d5597cf2dbd29c8696",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
