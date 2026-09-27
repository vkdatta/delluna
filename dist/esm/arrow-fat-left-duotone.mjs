export const name="arrow-fat-left-duotone";
export const id="dl_655a88bddad644d195ab";
export const url=new URL("../icons/arrow-fat-left-duotone.svg?v=1950aa55f6afe52e37c0833d0715119d0c646de00d9938f6d1ce6a66728c81a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
