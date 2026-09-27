export const name="cricket-fill";
export const id="dl_026edaf413a544d5a7fe";
export const url=new URL("../icons/cricket-fill.svg?v=a3fe006a11ccb62905931e8a90e1d2b3d8fd89330ab87dd9b55b2d4fc715588e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
