export const name="figma-logo-bold";
export const id="dl_a99eaec7ac4c4db3a39e";
export const url=new URL("../icons/figma-logo-bold.svg?v=57269caacbd9aa1085f6743a4eb42143dbd10b62c3df6fab3027d7f2bec8495f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
