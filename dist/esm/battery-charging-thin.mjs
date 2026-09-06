export const name="battery-charging-thin";
export const id="dl_c1ec99666fe2412dbc4d";
export const url=new URL("../icons/battery-charging-thin.svg?v=dfc983f38f72311a51594b409abfc42d7ed3ca71adfe4e405461f350c74ab6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
