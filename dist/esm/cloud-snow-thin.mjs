export const name="cloud-snow-thin";
export const id="dl_54c0b06faa014c738030";
export const url=new URL("../icons/cloud-snow-thin.svg?v=b7614673ceea77279c91d32947da33daa897041735084929d70dcb23e19bbcae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
