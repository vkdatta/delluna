export const name="meteor-bold";
export const id="dl_3e533192dcec40c1b152";
export const url=new URL("../icons/meteor-bold.svg?v=29601f745c240483cbc749d5462dcd04eb08410b8f8efbbf1833dc3eeb283536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
