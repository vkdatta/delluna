export const name="electric_rickshaw-fill";
export const id="dl_439e671ad64d4da497ed";
export const url=new URL("../icons/E/electric_rickshaw-fill.svg?v=a215060acaf9c33a6aeb4bb8e72d0f92111353edca4d727f3aaecd5cff397393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
