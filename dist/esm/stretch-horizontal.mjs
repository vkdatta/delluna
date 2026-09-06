export const name="stretch-horizontal";
export const id="dl_bc7bf82fdc7a4947905d";
export const url=new URL("../icons/stretch-horizontal.svg?v=372bcf232493fb3343ec8317df790f51cffbd42c27ab8874ca0884041aac69d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
