export const name="check-square";
export const id="dl_ecfb02d758274bc29675";
export const url=new URL("../icons/check-square.svg?v=69fc9a39cab4af71874d4cc56eaa6d8943962f2619f5c9a7e2e38d01e232c928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
