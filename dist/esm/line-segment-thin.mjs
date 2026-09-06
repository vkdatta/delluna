export const name="line-segment-thin";
export const id="dl_7f35152c3d4a429d8e10";
export const url=new URL("../icons/line-segment-thin.svg?v=aeb9608fb01b04b4c15a38a88d936e8afd306a8408fdd6bb029a4beee9362b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
