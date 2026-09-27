export const name="cards-thin";
export const id="dl_c8964df062e7431a9dda";
export const url=new URL("../icons/cards-thin.svg?v=e43ef946841f6eaa72a7ec1802887494156e6cd7bb448bc37fc14a3b8c2a445f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
