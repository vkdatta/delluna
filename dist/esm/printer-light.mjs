export const name="printer-light";
export const id="dl_4fc1c2a025c14fd3bf2e";
export const url=new URL("../icons/printer-light.svg?v=e89079a1079091366104e657b58e19e2668d12ea19fb0f6486b7c37343adc5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
