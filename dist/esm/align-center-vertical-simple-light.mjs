export const name="align-center-vertical-simple-light";
export const id="dl_99da8429a21b439fa715";
export const url=new URL("../icons/align-center-vertical-simple-light.svg?v=d37bdb1d7b1889b2fa2f4db84ebf2973450e2dc254f12cca01efe1430fca8791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
