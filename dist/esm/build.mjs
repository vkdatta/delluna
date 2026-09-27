export const name="build";
export const id="dl_a50ce2b8ce4069868ce9";
export const url=new URL("../icons/build.svg?v=b6dc86d291ff97db96b2d26932ec7b34f881878dc70ba816b9948b7e9fe41314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
