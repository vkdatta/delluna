export const name="arrow-u-right-up";
export const id="dl_db7a19aa14904a31842e";
export const url=new URL("../icons/arrow-u-right-up.svg?v=5550895c1fb11fecc683ada9557e91a1981cb15c003d57a1766b59956f1b67f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
