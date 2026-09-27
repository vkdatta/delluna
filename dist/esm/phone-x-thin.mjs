export const name="phone-x-thin";
export const id="dl_45e6a3e033ad4c14b3a2";
export const url=new URL("../icons/phone-x-thin.svg?v=6a162e5e8f8329e895cf9ef49ea556b506bc21c3cf87cd7ef9b6c7a6e304eeb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
