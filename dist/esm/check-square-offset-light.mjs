export const name="check-square-offset-light";
export const id="dl_df9195e087e6489cae9f";
export const url=new URL("../icons/check-square-offset-light.svg?v=175ab45cbe067a1aafff5e7682ba1e64e3ceed1ca074485f120fb28b9ad0f198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
