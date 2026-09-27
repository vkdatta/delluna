export const name="lastfm-logo-light";
export const id="dl_4a3955a7c5f24474bed7";
export const url=new URL("../icons/lastfm-logo-light.svg?v=7264538690826e6ec70ebc953198171e23db05018e09d5141679288fb61f3adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
