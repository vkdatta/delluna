export const name="gate";
export const id="dl_d9253e871e894dcfa7e3";
export const url=new URL("../icons/G/gate.svg?v=e7fa03b4001dab01b7c47cbabcc245e29a9852cbd50388c993dc3b078ef22a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
