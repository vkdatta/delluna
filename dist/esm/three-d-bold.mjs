export const name="three-d-bold";
export const id="dl_117dd4cca9964df893e7";
export const url=new URL("../icons/T/three-d-bold.svg?v=d9f988b78c22f9dba4ae525a92519c78e65bc4259e7557002528596608b6d647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
