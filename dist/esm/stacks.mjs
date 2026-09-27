export const name="stacks";
export const id="dl_3b95800c630dcfff4d82";
export const url=new URL("../icons/stacks.svg?v=1a0d791af03db0dda5b7cc34fb8b302c228805893cce0b1b80b28d2db9b69805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
