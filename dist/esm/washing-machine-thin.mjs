export const name="washing-machine-thin";
export const id="dl_69cb9e179526e17f7a11";
export const url=new URL("../icons/washing-machine-thin.svg?v=d18243170b63bc8dc178afd5b632dfda0237a52484a1e647c33994b91289d398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
