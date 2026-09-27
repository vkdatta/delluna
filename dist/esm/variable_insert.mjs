export const name="variable_insert";
export const id="dl_70c1257d01f727611927";
export const url=new URL("../icons/variable_insert.svg?v=2b5581c08e5286ca5ea6640d079cd059495d6cdc5f38c8eec0ec2d34cdae6c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
