export const name="transportation-fill";
export const id="dl_d25ed004beec4604ae93";
export const url=new URL("../icons/transportation-fill.svg?v=a9e88047d41169e1a83eac85df704913ce638cacc4e2ebd59a9a7dfd97a7b8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
