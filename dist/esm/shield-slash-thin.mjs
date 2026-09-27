export const name="shield-slash-thin";
export const id="dl_a3553834d575d764e48c";
export const url=new URL("../icons/shield-slash-thin.svg?v=2637ba13d31416767fddfac8b25ed25657b8e568a4ce5620cc7c75088e296b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
