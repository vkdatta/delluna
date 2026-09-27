export const name="labs";
export const id="dl_e6424f87f61bfa964ee7";
export const url=new URL("../icons/labs.svg?v=900ff41a675c05d2b6999ff80b585acb413de60ef6bad1f6d6a53392c4f93d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
