export const name="circles-three-thin";
export const id="dl_8d35d9e7ab7d4415b5c1";
export const url=new URL("../icons/circles-three-thin.svg?v=b6cc36393278a746da7f3f50280f2870f3ac105a3eac5aac4a758176a1f8142d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
