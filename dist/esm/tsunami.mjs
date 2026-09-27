export const name="tsunami";
export const id="dl_9bda663549d5ef468011";
export const url=new URL("../icons/tsunami.svg?v=c13c60809e3355f939757ab8a6300699244bb0613d9eeb6e382eaf9672aff760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
