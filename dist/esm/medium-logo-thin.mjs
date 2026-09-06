export const name="medium-logo-thin";
export const id="dl_c6c3f1d69c6d41debd7c";
export const url=new URL("../icons/medium-logo-thin.svg?v=99a1dce22a8712090f6bf02f1821eeb4a8d7294882aee98de4d305789b573301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
