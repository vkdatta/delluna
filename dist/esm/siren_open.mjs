export const name="siren_open";
export const id="dl_5a7e29df256e56e9a284";
export const url=new URL("../icons/siren_open.svg?v=8620b361805dcf13d4b6aa93e403ee1d91b6905a6f0cba8ba27e2a6f76335322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
