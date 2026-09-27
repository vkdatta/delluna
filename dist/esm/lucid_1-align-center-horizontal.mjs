export const name="lucid_1-align-center-horizontal";
export const id="dl_0d858d77d4c54dfc81bc";
export const url=new URL("../icons/lucid_1-align-center-horizontal.svg?v=eb0627a582b61d55b89ac115c2345c334953dc6dbe77c132d716316602a6be64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
