export const name="file-arrow-down-thin";
export const id="dl_fbb7bef57fca4e0283d8";
export const url=new URL("../icons/file-arrow-down-thin.svg?v=3ad35f3acc643d886f4cf897f7226f41dc577e8828a84011769141508281a668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
