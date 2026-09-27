export const name="ear-slash-fill";
export const id="dl_dfdb2cf6479c40ebbda7";
export const url=new URL("../icons/ear-slash-fill.svg?v=d2fe54ae2f444a9f542c1d7e69ec9d454ea616e809c57362355f43c1401ae817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
