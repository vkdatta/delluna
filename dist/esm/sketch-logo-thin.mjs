export const name="sketch-logo-thin";
export const id="dl_efc34cf3736b4af683ea";
export const url=new URL("../icons/S/sketch-logo-thin.svg?v=683b0ffde140b33688f86a94b4f9be208628816a117c7496d6ed991a7e401b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
