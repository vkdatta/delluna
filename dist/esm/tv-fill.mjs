export const name="tv-fill";
export const id="dl_433de9a5957a4247ae68";
export const url=new URL("../icons/tv-fill.svg?v=d7905cec7317a3c52740412c6dd212977e7d84e3a70b83485b68e47e110811cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
