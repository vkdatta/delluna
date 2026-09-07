export const name="seal-question-fill";
export const id="dl_d4b219c222954f2f9402";
export const url=new URL("../icons/S/seal-question-fill.svg?v=ceb4029a364344fc50b14c88fb9c1f8fab4d63030c435705b3f9c37b57a60d80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
