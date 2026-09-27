export const name="lucid_2-landmark";
export const id="dl_d37a4d135e8344e48724";
export const url=new URL("../icons/lucid_2-landmark.svg?v=6ef132dd25fc5b93039a404f1032dca8b88225ad89b38bc4d45ff43bd767809e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
