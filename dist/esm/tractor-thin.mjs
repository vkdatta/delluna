export const name="tractor-thin";
export const id="dl_7d72a6505bc405f62934";
export const url=new URL("../icons/tractor-thin.svg?v=27b0c67729b3380621dded1c9eca96b3f26275590088d292655d69f71bd46f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
