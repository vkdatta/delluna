export const name="person-simple-run-thin";
export const id="dl_145e117c18104214b5d3";
export const url=new URL("../icons/person-simple-run-thin.svg?v=9f6c3c46968d68e8060bc8a60cdbccaac65e1a9b4b46788bf55a58d9552529b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
