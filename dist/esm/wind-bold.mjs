export const name="wind-bold";
export const id="dl_a70faad601e34b1d968f";
export const url=new URL("../icons/W/wind-bold.svg?v=8bd3ffd2f26688090752f4f1d685c0fdbe1927d76dcc80a2042bcb65f4c84a56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
