export const name="person-simple-run";
export const id="dl_607ba61c4e81462f9802";
export const url=new URL("../icons/person-simple-run.svg?v=135ae197685d5161b99df2b9e750a8b9d5c7aef802fd6145c2f0dc4783378681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
