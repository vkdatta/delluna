export const name="arrow_forward";
export const id="dl_7bd279ff9ccc1cd6e863";
export const url=new URL("../icons/arrow_forward.svg?v=b26105321b49e78bc7d4175d356f1d1be0cd8508e82426894cdabbd145e7e3c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
