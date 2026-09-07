export const name="pencil-simple-light";
export const id="dl_dcd5044f8c3a4f42a1f9";
export const url=new URL("../icons/pencil-simple-light.svg?v=c6e700d0430923f8496c51813b81d63623bcb714777461d2914396d35ffa7790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
