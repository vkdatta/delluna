export const name="caret-double-up-light";
export const id="dl_06fd1885a54d48cbb40c";
export const url=new URL("../icons/caret-double-up-light.svg?v=b4be4d7c37d04798e7df15714401250ff0198cc18fa702f7d71dbad800e41777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
