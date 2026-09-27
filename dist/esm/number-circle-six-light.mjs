export const name="number-circle-six-light";
export const id="dl_e4631d86b11d48ad95bc";
export const url=new URL("../icons/number-circle-six-light.svg?v=6e5ac9e561aa11c87529d3521e7967e53baa67feb4f6913a61820a76fd9ed8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
