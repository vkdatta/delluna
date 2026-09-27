export const name="selection-background-thin";
export const id="dl_5ba6e920e08919fdf37d";
export const url=new URL("../icons/selection-background-thin.svg?v=1ad25fb31121788b80569bbd706fbc0af48fb688371dc87e3eb9a306c4568817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
