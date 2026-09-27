export const name="align-right-light";
export const id="dl_c8759e5696bc41af9182";
export const url=new URL("../icons/align-right-light.svg?v=286cfc07692a925f4187f813e05c5fa8850f46cd381460f147451a1267a0125b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
