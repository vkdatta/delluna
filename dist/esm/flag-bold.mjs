export const name="flag-bold";
export const id="dl_866ee4a04e9a4dfb9429";
export const url=new URL("../icons/flag-bold.svg?v=43476831d66b397669c93e7247613b339078149a34aaa05ccfab159a50eb5bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
