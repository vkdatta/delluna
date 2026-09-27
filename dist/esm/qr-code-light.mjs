export const name="qr-code-light";
export const id="dl_4e53d4d970164fe3b02e";
export const url=new URL("../icons/qr-code-light.svg?v=9617e104e64a40308992f1e135cbec77cd71256354defab57b26dd05857879fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
