export const name="line_style";
export const id="dl_4fb70de44eea8f8f2233";
export const url=new URL("../icons/line_style.svg?v=ac683ec46cacabcca3770a38e77481ffd1d366eb6d744bdb3b5a4ea70f511df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
