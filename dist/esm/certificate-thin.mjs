export const name="certificate-thin";
export const id="dl_55e6e9b365ba4f6ca326";
export const url=new URL("../icons/certificate-thin.svg?v=18d81c9435ff3fcb4568da467812e2187ce938595174546736df71675bbebae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
