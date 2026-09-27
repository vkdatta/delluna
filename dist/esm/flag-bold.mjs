export const name="flag-bold";
export const id="dl_866ee4a04e9a4dfb9429";
export const url=new URL("../icons/flag-bold.svg?v=fc7692f33bc000e49a105700a47a0802af2a01e194bdbe88998d7dd07987f2fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
