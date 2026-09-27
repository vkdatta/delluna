export const name="trash-thin";
export const id="dl_e2377caec5e26a1bf4b1";
export const url=new URL("../icons/trash-thin.svg?v=c0bd73374c8587647765ee4ac576ac6957f4a9274dad0a49c9c49d50f4cab83f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
