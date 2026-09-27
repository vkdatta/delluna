export const name="skype-logo-fill";
export const id="dl_6931c8db109a53b4fcf0";
export const url=new URL("../icons/skype-logo-fill.svg?v=1c98e58753bab3e8b157163ca527144957fc9616168f0ba86e843f09b1781107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
