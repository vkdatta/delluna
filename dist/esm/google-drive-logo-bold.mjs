export const name="google-drive-logo-bold";
export const id="dl_e9325c72b5f044ccad71";
export const url=new URL("../icons/google-drive-logo-bold.svg?v=597021aa2188f313ec071550ab0edbfeaa263d288e0d9ba0cd2ad501884dd0ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
