export const name="google-logo-duotone";
export const id="dl_c6953072ee884c919385";
export const url=new URL("../icons/google-logo-duotone.svg?v=307666c4b0ce4058541300d3d4b875e6d21c0175bf691de058f722988e4db941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
