export const name="align-bottom-duotone";
export const id="dl_1eabd59c57984e31b579";
export const url=new URL("../icons/align-bottom-duotone.svg?v=4f17fe8e3327114f39fc461fc9e11c8009c487c95747a777ffed5977e4b2bf40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
