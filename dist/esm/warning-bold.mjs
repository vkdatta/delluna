export const name="warning-bold";
export const id="dl_5a36489b59c75565e60d";
export const url=new URL("../icons/warning-bold.svg?v=c06111ac44dcafd0f50158d5d063f72e8a16f599bba5a7daf62e392aba714bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
