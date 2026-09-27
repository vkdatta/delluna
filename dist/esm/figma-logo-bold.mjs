export const name="figma-logo-bold";
export const id="dl_a99eaec7ac4c4db3a39e";
export const url=new URL("../icons/figma-logo-bold.svg?v=551963bdd3c0c1fc5dead05bb5fa8e21163016a734a82d770aa2ba8ed344b21b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
