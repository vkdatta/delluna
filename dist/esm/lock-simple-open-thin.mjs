export const name="lock-simple-open-thin";
export const id="dl_c82cf776950f4952ab99";
export const url=new URL("../icons/lock-simple-open-thin.svg?v=b21146932f770f5827161d78c34e4da982b604874d61c201d40760f3a5251986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
