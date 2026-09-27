export const name="git-branch";
export const id="dl_226f38bf82c841a8b4cd";
export const url=new URL("../icons/git-branch.svg?v=33bf75b38b4acdb8f5f1223e48549eaa8d03dd7cbd167d6bf401f82ae0b55b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
