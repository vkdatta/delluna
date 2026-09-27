export const name="close";
export const id="dl_6867864a38666b5be1bf";
export const url=new URL("../icons/close.svg?v=bdb852df419cc256179ee4c1685245219de6f133613bfcd56229e7a901ddfea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
