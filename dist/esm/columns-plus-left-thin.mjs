export const name="columns-plus-left-thin";
export const id="dl_56f1322c488e48abba42";
export const url=new URL("../icons/columns-plus-left-thin.svg?v=b30484c8da85404c52895eadcbb060fa1c0bee794afaeb10ce3b8469ccd5460f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
