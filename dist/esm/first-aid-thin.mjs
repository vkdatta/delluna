export const name="first-aid-thin";
export const id="dl_cfd12b4967d9416ca904";
export const url=new URL("../icons/first-aid-thin.svg?v=fa81852f9ee1a2d68edb005621441ae217c5c1beca23729bc4781c150fcc753c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
