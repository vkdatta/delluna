export const name="assignment_globe";
export const id="dl_6df5123007bd4c0784e8";
export const url=new URL("../icons/assignment_globe.svg?v=cd36d78e772995fb3248df56c866c2662211146c49923c36b8e20557ffed3a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
