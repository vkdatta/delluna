export const name="basketball-thin";
export const id="dl_215e1ce797844c519700";
export const url=new URL("../icons/basketball-thin.svg?v=d3c9dcfaebb9a568b85e2e4435232db771c6c5f4abe7e0407e19e7f9fd21d97c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
