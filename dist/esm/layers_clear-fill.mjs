export const name="layers_clear-fill";
export const id="dl_35a83edcf08e94f1f009";
export const url=new URL("../icons/layers_clear-fill.svg?v=a348b04be700ac6a764c62702412bef395d211ed342a16d51fb9caa9cad3fcda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
