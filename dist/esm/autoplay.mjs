export const name="autoplay";
export const id="dl_d16503fd0db54c528ee4";
export const url=new URL("../icons/A/autoplay.svg?v=74afd8d415e8229446f8dbf011b50bce9455a8e17171a7bdb8ea518b65c675d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
