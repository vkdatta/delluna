export const name="lucid_2-feather";
export const id="dl_1d2297fb1d604ab6853f";
export const url=new URL("../icons/lucid_2-feather.svg?v=02bdbf48b7abb226cbbf955ccca4aaf687699cae37e08c6fabee684658c5163a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
