export const name="bell-duotone";
export const id="dl_c76788f0e59f4a20b190";
export const url=new URL("../icons/bell-duotone.svg?v=2191c40a5dd9806dbd9a23e6e571e3eed73f0abcd0c38e5068f8a1e47abbaa20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
