export const name="microsoft-powerpoint-logo";
export const id="dl_ef7eced5c049463c94b9";
export const url=new URL("../icons/microsoft-powerpoint-logo.svg?v=4618072206d1100bbc1de0ec5399973c0f0166de39093acab7724d4b4887f125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
