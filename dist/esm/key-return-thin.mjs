export const name="key-return-thin";
export const id="dl_50176190ba0a48c3b45d";
export const url=new URL("../icons/key-return-thin.svg?v=c93933939b2706e4877dd2952c8d1af3543e6ed3f9f42b7dc6a4789da3aeabf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
