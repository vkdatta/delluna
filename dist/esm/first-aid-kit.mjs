export const name="first-aid-kit";
export const id="dl_c7f8fcf0a336445b9b5d";
export const url=new URL("../icons/first-aid-kit.svg?v=22de9d566d1aacf65f0fbde265cd8c0abf95ff734be23e8f0f3144e9c83266c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
