export const name="push-pin-simple-slash-bold";
export const id="dl_fac980b7434f4368918f";
export const url=new URL("../icons/push-pin-simple-slash-bold.svg?v=dac1ad20bfabf7486374966e5559fa6e639cb8ddcd9afe92c87ec5a93732e752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
