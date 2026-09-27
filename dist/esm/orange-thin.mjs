export const name="orange-thin";
export const id="dl_83c3cbbb3b3d48feb9f2";
export const url=new URL("../icons/orange-thin.svg?v=41c3e0e9edc4b153e881c86c904d4ac45e58d7f5cf00b9e4ac4571e691d65119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
