export const name="lucid_3-merge";
export const id="dl_27af7f72f8914c558c9e";
export const url=new URL("../icons/lucid_3-merge.svg?v=1dc6398514354fd6bc0dcd241a1185ec3ba6dd5b004d2f00aae07fe976006344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
