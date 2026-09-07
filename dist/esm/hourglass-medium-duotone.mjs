export const name="hourglass-medium-duotone";
export const id="dl_3987bed1d2164e709415";
export const url=new URL("../icons/hourglass-medium-duotone.svg?v=a551caeac5d364285f82dd57f6d2dbc38a5f28482a36f0ca11af12beaa0bf1a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
