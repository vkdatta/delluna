export const name="guitar-thin";
export const id="dl_cb9c76ad17614b639d7b";
export const url=new URL("../icons/guitar-thin.svg?v=da189aef41ab05852a9a08de611e81172de75d6f6bbaad95a26e6bb19d2496ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
