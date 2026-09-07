export const name="warning-circle-thin";
export const id="dl_2b831bf0a2aa4d8abb79";
export const url=new URL("../icons/W/warning-circle-thin.svg?v=380c7d271b1c46dead5275ce57157df70c7730bffc13733a1aeb185adfddb877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
