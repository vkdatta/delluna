export const name="person-simple-run-thin";
export const id="dl_145e117c18104214b5d3";
export const url=new URL("../icons/person-simple-run-thin.svg?v=8d0d22d986b70001123032b77ea78bd7bcd094245f48526c53a9172b9bd12fdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
