export const name="playground_2";
export const id="dl_e7425f9af1285e248310";
export const url=new URL("../icons/playground_2.svg?v=06434344018407134681c3d69a30049ca79fa53057672e68d2eb571fe9683afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
