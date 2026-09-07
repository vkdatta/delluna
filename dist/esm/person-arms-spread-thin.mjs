export const name="person-arms-spread-thin";
export const id="dl_dbd76282eb2d433788a6";
export const url=new URL("../icons/person-arms-spread-thin.svg?v=82e0bf5fe950b5a4b7b8023edf0a9e75e1d37a99c900d8693449543192b56228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
