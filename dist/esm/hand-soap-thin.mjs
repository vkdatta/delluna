export const name="hand-soap-thin";
export const id="dl_81c8d6467ca6479895c0";
export const url=new URL("../icons/hand-soap-thin.svg?v=a85cda64fd80661fa4bdf391f48b37217461af61a87a3673cd1bfaaf853f9cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
