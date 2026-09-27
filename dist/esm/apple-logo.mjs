export const name="apple-logo";
export const id="dl_8849292ab8d14eac9b53";
export const url=new URL("../icons/apple-logo.svg?v=23a23866fb443242a210ab6dae96c77a34af4d18bdc60e4bee8514c14063d37e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
