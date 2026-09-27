export const name="docs";
export const id="dl_a1144980eed125ca9249";
export const url=new URL("../icons/docs.svg?v=c057c279a6cc3a8c9c454e198b9d7108976006175130bae25add78eb3ebe6e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
