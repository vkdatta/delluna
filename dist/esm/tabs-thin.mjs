export const name="tabs-thin";
export const id="dl_6560997c12394b129051";
export const url=new URL("../icons/T/tabs-thin.svg?v=909e8a9fba8d22a7ee665b469454cdf33f99a7121ce731e3f5dca846533617f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
