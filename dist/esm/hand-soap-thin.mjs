export const name="hand-soap-thin";
export const id="dl_81c8d6467ca6479895c0";
export const url=new URL("../icons/hand-soap-thin.svg?v=2fdf0bb6d328d8e557caad01940b5c263f1697ce8e2dc37444c47ffee0fac2ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
