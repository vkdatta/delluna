export const name="keyboard_keys-fill";
export const id="dl_fffc0279562f984de213";
export const url=new URL("../icons/keyboard_keys-fill.svg?v=2369599770d56f5d614e0d858edaecc2d8b24ad7eb524aa56c5575500ec1d176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
