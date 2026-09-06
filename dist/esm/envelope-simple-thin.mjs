export const name="envelope-simple-thin";
export const id="dl_791ecfa437e548abb698";
export const url=new URL("../icons/envelope-simple-thin.svg?v=d5888f8765c95532b72ce3e7de093c60db7452801b3b3321cb4bd15ffe582f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
