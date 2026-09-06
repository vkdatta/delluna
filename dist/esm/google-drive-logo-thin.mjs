export const name="google-drive-logo-thin";
export const id="dl_42bf6d02e6124ea480a9";
export const url=new URL("../icons/google-drive-logo-thin.svg?v=72e7326a0ff92b10085157a0d12950a783fbcdc4506687acdd64c3b30e1ced5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
