export const name="signpost-duotone";
export const id="dl_1de1d4eb57b74c6f8ab6";
export const url=new URL("../icons/S/signpost-duotone.svg?v=cddbc19133d0e6939aa2b513fa249c14bd315a86c817d618dba53237172593c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
