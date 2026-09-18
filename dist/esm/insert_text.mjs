export const name="insert_text";
export const id="dl_298d236db14d47de8be2";
export const url=new URL("../icons/insert_text.svg?v=eb0f5cbe77008dbdfe5c5e5310185945196813fbd11e8e846b3d53217714d37e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
