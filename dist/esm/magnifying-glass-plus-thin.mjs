export const name="magnifying-glass-plus-thin";
export const id="dl_ef59d031916940ecbb8f";
export const url=new URL("../icons/magnifying-glass-plus-thin.svg?v=69cc75a87660517881b15cafa9279cd1fbff8e73041d979fc33cdc67f76c9708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
