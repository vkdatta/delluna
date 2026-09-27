export const name="rv_hookup-fill";
export const id="dl_552f4504aff8be984cec";
export const url=new URL("../icons/rv_hookup-fill.svg?v=cf0fbc70cfc31a105e53e3e77edaeb63049e88a727faa541f5adcc021ca6e2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
