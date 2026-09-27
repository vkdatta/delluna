export const name="cube-transparent-bold";
export const id="dl_6e26f118b04e402aa4c5";
export const url=new URL("../icons/cube-transparent-bold.svg?v=d52b3168d757596742f0499811fdfcf62e0fd658f71189af3e86395b645a5069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
