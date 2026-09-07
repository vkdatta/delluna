export const name="bowl-steam-thin";
export const id="dl_5269aad3c09242e5a6d0";
export const url=new URL("../icons/bowl-steam-thin.svg?v=f7f96fffa1f842da8ee769724eda6a08e03f22464b6f5fed7f0ac318fad4b697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
