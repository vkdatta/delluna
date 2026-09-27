export const name="tag-simple-light";
export const id="dl_c7f7cb2c8f0f59e9ba97";
export const url=new URL("../icons/tag-simple-light.svg?v=56de83f9b5886bab12521c8a085450cbbc29847500b5bc5e534a8c4347b1c6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
