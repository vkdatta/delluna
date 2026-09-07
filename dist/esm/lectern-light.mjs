export const name="lectern-light";
export const id="dl_bf790041be984092a50f";
export const url=new URL("../icons/lectern-light.svg?v=c38180072337f961d3d8a4da87a9962e7e89c310912555ad40ede620316c2c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
