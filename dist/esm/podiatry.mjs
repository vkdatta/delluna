export const name="podiatry";
export const id="dl_f166c65ed7a94b45b8ed";
export const url=new URL("../icons/P/podiatry.svg?v=bd685885136f7f171a8a8ae0ca53d4c533d1bcbc5305a273b9909cbb3e6823e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
