export const name="paper-plane-tilt-duotone";
export const id="dl_aeb249cf7b7347c6b48e";
export const url=new URL("../icons/paper-plane-tilt-duotone.svg?v=a8eb912cee783545493f39946640bf1d93768051addfbab56b040d552e519c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
