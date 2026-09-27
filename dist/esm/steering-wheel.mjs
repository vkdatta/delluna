export const name="steering-wheel";
export const id="dl_29f714d202e63814bd5a";
export const url=new URL("../icons/steering-wheel.svg?v=c200d5339a11e46c3350e92a9000e0818a37c1ee7708b26e75698e80a72d6a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
