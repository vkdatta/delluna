export const name="share-fat-thin";
export const id="dl_4246b207d051424b8968";
export const url=new URL("../icons/S/share-fat-thin.svg?v=4c2684113b8136a49f2da96c73acea762ddecb60cf545194c393546c9d7b9916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
