export const name="lucid_3-maximize-2";
export const id="dl_9e86579b7acc495b8755";
export const url=new URL("../icons/lucid_3-maximize-2.svg?v=b0708147b338bf72a60c671a8e863cb646f79415f112d60e81d8600599d4442d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
