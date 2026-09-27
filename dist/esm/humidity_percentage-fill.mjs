export const name="humidity_percentage-fill";
export const id="dl_81c279c70c9d9f8ad47c";
export const url=new URL("../icons/humidity_percentage-fill.svg?v=b78038c8eecf021b45b394c08807530322641c75894b70e21c83228fc42d22d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
