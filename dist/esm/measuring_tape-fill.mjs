export const name="measuring_tape-fill";
export const id="dl_4c0c432f113343859efe";
export const url=new URL("../icons/measuring_tape-fill.svg?v=bf4f655c74a4ec1ce0eff626de37d05607c6114c9cfb237f2edfe293fb2810e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
