export const name="check-fat-thin";
export const id="dl_46d113b0f957411b8e10";
export const url=new URL("../icons/check-fat-thin.svg?v=86618539c799d34b5569011b840d24378e83fcad4aac6dbcb4bb4ab33ec3ca34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
