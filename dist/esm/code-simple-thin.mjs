export const name="code-simple-thin";
export const id="dl_c4412bec14e44e5395bc";
export const url=new URL("../icons/code-simple-thin.svg?v=120dfa51220b715e795a1c51b607d17f89f0600b428847fed3ae50c44f9618b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
