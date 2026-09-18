export const name="vertical_split";
export const id="dl_9f34c6088145418e8469";
export const url=new URL("../icons/V/vertical_split.svg?v=41ee40d26d093c6a7ccafc8ad17676f8e96e3e410a8957d13e2a1314ec092930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
