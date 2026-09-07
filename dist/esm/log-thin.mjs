export const name="log-thin";
export const id="dl_e7f6e11f50344580b0c9";
export const url=new URL("../icons/log-thin.svg?v=56e48b8783d720727a43b4c1182b76ddac040e8e32da31ac02391eaf7a64da3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
