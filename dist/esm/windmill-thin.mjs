export const name="windmill-thin";
export const id="dl_c507fc1b7de14b739cab";
export const url=new URL("../icons/W/windmill-thin.svg?v=7182ed88db82f8a0d5aa0e0da9f3a017cc4bede153ffccd60d93d0b14aecc9a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
