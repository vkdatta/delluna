export const name="codesandbox-logo";
export const id="dl_f63a3dadc9c64140b6af";
export const url=new URL("../icons/codesandbox-logo.svg?v=ee721a742ae73c9244c4d5c4343f007726ce773112ec5555fd698441bbda402d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
