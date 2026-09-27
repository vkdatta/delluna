export const name="orange-thin";
export const id="dl_83c3cbbb3b3d48feb9f2";
export const url=new URL("../icons/orange-thin.svg?v=2ceb137ccf128188921fdaa3a0aadf4c6218f27acdba34e18d4543d2402ad60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
