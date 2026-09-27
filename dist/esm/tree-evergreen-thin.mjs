export const name="tree-evergreen-thin";
export const id="dl_e240ca852cd82a7dbe90";
export const url=new URL("../icons/tree-evergreen-thin.svg?v=0b0b31f645416971c7b9c7c97729741fd2bafd860c0c4aa5b8216cadd8799d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
