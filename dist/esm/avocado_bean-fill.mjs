export const name="avocado_bean-fill";
export const id="dl_d37e3cb3f7fb47878c6a";
export const url=new URL("../icons/avocado_bean-fill.svg?v=07383888a00d1b5ae8c459bfd7e406cc6a1a84800771d111ec0881520e1dc4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
