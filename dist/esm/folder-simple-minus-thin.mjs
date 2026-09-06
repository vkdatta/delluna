export const name="folder-simple-minus-thin";
export const id="dl_edf3ecc3768844f28f63";
export const url=new URL("../icons/folder-simple-minus-thin.svg?v=527438aa7803aa6adf1e670fec3e757776a0736603383863f1098636f4683524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
