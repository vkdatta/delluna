export const name="local_activity";
export const id="dl_a2b30725c8b51d41b671";
export const url=new URL("../icons/local_activity.svg?v=e575622adee38b1c980325af17a2698a5dbd3ef90f4d8f46da5f1d7161f04e6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
