export const name="cloud-sun-light";
export const id="dl_cfcc74886e294260a7ec";
export const url=new URL("../icons/cloud-sun-light.svg?v=1797ce85d34e5fe9a05ce012668f18e9a736a46bb5916298975df81bcd7885f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
