export const name="arrow-elbow-up-left-thin";
export const id="dl_d1f036782b254ec19333";
export const url=new URL("../icons/arrow-elbow-up-left-thin.svg?v=ac20a19ad4dfb1f021ce4ab29c40d16f7c0d1cd8ce39639e71e36967f29298a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
