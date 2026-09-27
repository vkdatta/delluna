export const name="eyes-thin";
export const id="dl_d4efa106e1fe45cd9f10";
export const url=new URL("../icons/eyes-thin.svg?v=b26b6791c4189cf96d9851134e3989b412e184313babb0c3cbd5214ca115ed44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
