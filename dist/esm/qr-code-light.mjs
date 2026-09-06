export const name="qr-code-light";
export const id="dl_4e53d4d970164fe3b02e";
export const url=new URL("../icons/qr-code-light.svg?v=a1505b99a2dcb42b81075f6fff0e2e2e91d5b4156490fa293a206eedc8315e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
