export const name="lucid_2-file-code";
export const id="dl_c8f6a673caac421e9aef";
export const url=new URL("../icons/lucid_2-file-code.svg?v=e840182fe3410aeaedbd688c6b95b678c7a777389dfaf6c5def7fed77fae51d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
