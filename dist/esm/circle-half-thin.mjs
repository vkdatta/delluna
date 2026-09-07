export const name="circle-half-thin";
export const id="dl_e53dd17e34494918898d";
export const url=new URL("../icons/circle-half-thin.svg?v=c3690259555f9bd9a150a55381e936a355c95f262c4a336bb525f935cbc98b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
