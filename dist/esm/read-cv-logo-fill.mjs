export const name="read-cv-logo-fill";
export const id="dl_51eeaaedb6314e6abdd9";
export const url=new URL("../icons/read-cv-logo-fill.svg?v=290f69e79a7b597664d240e6bb08ba5a01460f24bfebbd6d8255a2dc9bf956d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
