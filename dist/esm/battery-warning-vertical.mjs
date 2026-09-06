export const name="battery-warning-vertical";
export const id="dl_ab81505cebb94588b491";
export const url=new URL("../icons/battery-warning-vertical.svg?v=3e052823f4177c8e789e8d16adc404e3529806b6b2b371ce38ac8d4663e19eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
