export const name="pinterest-logo-fill";
export const id="dl_74219866458345229d79";
export const url=new URL("../icons/pinterest-logo-fill.svg?v=85a9d234e3f63b50bc644dce858eb05b7e6f79a0a161c496e1f83f01f5ed5fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
