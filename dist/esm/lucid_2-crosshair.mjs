export const name="lucid_2-crosshair";
export const id="dl_70ff1b80e0004e43af31";
export const url=new URL("../icons/lucid_2-crosshair.svg?v=e2d320ba5d7413e03889c20e3c5bd550fb7027679e94c7eadb205e91740f97dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
