export const name="standard-definition-thin";
export const id="dl_d74c8a6bbca599a970f6";
export const url=new URL("../icons/standard-definition-thin.svg?v=e8118ed3365ef7f1d2d92fa529c1e0fb668af2f4f684c4300892ef2ab34a14de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
