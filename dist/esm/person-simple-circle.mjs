export const name="person-simple-circle";
export const id="dl_cb0987f548744efa9f43";
export const url=new URL("../icons/person-simple-circle.svg?v=ed1cafdd844d96a05049f97728efb1e8c5f9be230dc8da0e5c1e5414603ab568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
