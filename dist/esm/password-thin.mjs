export const name="password-thin";
export const id="dl_ef016ff9e47743c39845";
export const url=new URL("../icons/password-thin.svg?v=479ceb501a5f4fce839f6825150041676c5fc628280d9dae0cf14c3fbbd0dde7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
