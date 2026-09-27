export const name="acorn-duotone";
export const id="dl_8b89bd11d7834123b527";
export const url=new URL("../icons/acorn-duotone.svg?v=17c830c4a8c6bf81380bb4504ebb31f4fb99c34c5e757563df12a7f161b23c45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
