export const name="wrap_text";
export const id="dl_1f09b3aca2833cb8f58f";
export const url=new URL("../icons/wrap_text.svg?v=62c8abb98437b41e67e3a103e83f8ae4630b3d54c145fe689ed7ed3d2de42429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
