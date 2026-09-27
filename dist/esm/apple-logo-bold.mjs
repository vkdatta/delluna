export const name="apple-logo-bold";
export const id="dl_4ed7ce6c14fa47c29e6e";
export const url=new URL("../icons/apple-logo-bold.svg?v=c4232bed66bb6296a7d764cf6d3823b683bb21e1086b822c8bd1150ced98b6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
