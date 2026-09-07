export const name="text-t-slash-thin";
export const id="dl_140cdfcd94934767b1a5";
export const url=new URL("../icons/T/text-t-slash-thin.svg?v=638189ff5a3d3f9e432e3668410bbec37d996e65e986052117a49e67bc7a78c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
