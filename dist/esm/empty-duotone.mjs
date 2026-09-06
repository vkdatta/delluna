export const name="empty-duotone";
export const id="dl_68f720006b394e86a15c";
export const url=new URL("../icons/empty-duotone.svg?v=d438168d0b36451a80ece3ef0d296edbe2c551fd0b531df8c91d86de4d4d4fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
