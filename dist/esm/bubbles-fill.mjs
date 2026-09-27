export const name="bubbles-fill";
export const id="dl_a8f5f4bde7ed8a461199";
export const url=new URL("../icons/bubbles-fill.svg?v=b7af0c4a8f1391455ae94f271005f36dab477b6c49bf095c0e97b56028eef231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
