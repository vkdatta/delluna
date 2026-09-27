export const name="lucid_2-link-2-off";
export const id="dl_236ce09ff08f463fbf94";
export const url=new URL("../icons/lucid_2-link-2-off.svg?v=5aecadc9fbcba7625f82f9bb552bf6ffa67940f127067f62715bd41bdc462165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
