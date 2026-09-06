export const name="arrows-out-duotone";
export const id="dl_786d9378817f495abd2f";
export const url=new URL("../icons/arrows-out-duotone.svg?v=387da53e97640c7485a56c23286696c49c0611f11bf870fd6b2af0c247d11de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
