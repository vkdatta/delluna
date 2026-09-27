export const name="siren-thin";
export const id="dl_a8bfc6165fd836cf8b42";
export const url=new URL("../icons/siren-thin.svg?v=bddaed4c478fde6a781658132d7ca0442522cd493477d9b9b6b24d24cec8cf02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
