export const name="filter_center_focus";
export const id="dl_3c59aac066afa56cbb87";
export const url=new URL("../icons/filter_center_focus.svg?v=c93d26bc4a2220785f4950c05ad418027b250a764495ddc23801827d41fc510f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
