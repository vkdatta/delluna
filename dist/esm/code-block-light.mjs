export const name="code-block-light";
export const id="dl_0c51f857ad934e2c9230";
export const url=new URL("../icons/code-block-light.svg?v=9e4d3c132361c80b15a12e4e9fc88319e23db0adafc23738ce7c319bfb189a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
