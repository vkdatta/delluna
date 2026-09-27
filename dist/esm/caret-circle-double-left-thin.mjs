export const name="caret-circle-double-left-thin";
export const id="dl_530a3f6ee58645219b6c";
export const url=new URL("../icons/caret-circle-double-left-thin.svg?v=b90996ea19069ce6c4d05a0a28309b509e93e6c4cfc16b313c0148e5ef19a7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
