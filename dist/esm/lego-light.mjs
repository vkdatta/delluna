export const name="lego-light";
export const id="dl_437626a50e6b4d9db2d7";
export const url=new URL("../icons/lego-light.svg?v=9914958c42021b588fc4e8499212f94fe24d86d8d2a51b000a03c35f8400c265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
