export const name="lucid_1-badge-question-mark";
export const id="dl_6569cf4753864b618931";
export const url=new URL("../icons/lucid_1-badge-question-mark.svg?v=b4af9b4b70f379283342b8d3d768c18addabaf2b07211762c5f2a8f2fffc5448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
