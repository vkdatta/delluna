export const name="cloud-rain-thin";
export const id="dl_cc7e427f2bb74bc68970";
export const url=new URL("../icons/cloud-rain-thin.svg?v=c600e5115ff0e9e87ce20535f738c39a54b21ce309d4770e7d7f67770ccf8eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
