export const name="blanket";
export const id="dl_a721ba7caff0f47dbae3";
export const url=new URL("../icons/blanket.svg?v=465473957efd03e1fb1f4c0dc48bc8816455db62f4ed6da6d8f308940c05776f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
