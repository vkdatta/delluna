export const name="heat";
export const id="dl_6820e00a0a4b8f111ab4";
export const url=new URL("../icons/heat.svg?v=7a1c4f00148fd9c26aa04a18f2752f5211dd9fb9f7faac71cbfbfd7fac420d5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
