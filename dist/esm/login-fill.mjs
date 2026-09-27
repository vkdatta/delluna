export const name="login-fill";
export const id="dl_e3e7298c4d7b8f2d2ed0";
export const url=new URL("../icons/login-fill.svg?v=bccc9d9abc8761c210efeeeacf94b74bcaeb64bbc037690a10787f226a18abd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
