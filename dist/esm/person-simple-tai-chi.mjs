export const name="person-simple-tai-chi";
export const id="dl_2b4f66b57e3c44c398ff";
export const url=new URL("../icons/person-simple-tai-chi.svg?v=571b8848edb863e2fd1ff754523ff789767ac1ce51c1e29845528d2c60eacfbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
