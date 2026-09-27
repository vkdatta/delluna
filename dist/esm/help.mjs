export const name="help";
export const id="dl_3018bb5ea6a7f0d09912";
export const url=new URL("../icons/help.svg?v=8b4738d96859ed4428764dcc98647f65ee6d09269ebaf9636da82f0b45e34249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
