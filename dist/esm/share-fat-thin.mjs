export const name="share-fat-thin";
export const id="dl_1f8695ab0c1052ba7cec";
export const url=new URL("../icons/share-fat-thin.svg?v=4c2684113b8136a49f2da96c73acea762ddecb60cf545194c393546c9d7b9916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
