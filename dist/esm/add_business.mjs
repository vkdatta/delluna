export const name="add_business";
export const id="dl_fe46c2800c3339cff681";
export const url=new URL("../icons/add_business.svg?v=8718cff35733631263966a7d65291e01aac88ce825a7d8f51d7e3ee2ea7725d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
