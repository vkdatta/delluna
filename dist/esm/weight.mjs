export const name="weight";
export const id="dl_2de7b198099946519105";
export const url=new URL("../icons/weight.svg?v=ee0a0e12ba4b4b0ac454a561d9db4a4fc77b6b36e08177319296bfdfca983487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
