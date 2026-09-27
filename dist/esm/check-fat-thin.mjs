export const name="check-fat-thin";
export const id="dl_46d113b0f957411b8e10";
export const url=new URL("../icons/check-fat-thin.svg?v=f1817da1e0f5dd58c226e7bd9bed6862f1e5849dba2baeeb3cabc1631c00f80a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
