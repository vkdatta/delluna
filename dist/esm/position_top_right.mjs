export const name="position_top_right";
export const id="dl_c6496d36ddc03538ffbf";
export const url=new URL("../icons/position_top_right.svg?v=4d4553ccebd72ca4f3cecaaa6354ecea44a27efa016771d7e266890288dddad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
