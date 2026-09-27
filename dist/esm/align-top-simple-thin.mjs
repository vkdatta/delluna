export const name="align-top-simple-thin";
export const id="dl_675fe8d7c84f4ab4a028";
export const url=new URL("../icons/align-top-simple-thin.svg?v=f2cb3ac3b977ac9e9c8e282758087ea5604d30b7526530e578ae852cb75e2f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
