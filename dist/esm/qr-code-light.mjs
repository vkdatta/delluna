export const name="qr-code-light";
export const id="dl_4e53d4d970164fe3b02e";
export const url=new URL("../icons/qr-code-light.svg?v=f7451b3fe4f536a2815fee6ec207aafeb4587319ef050c43a65deec6f4b7329b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
