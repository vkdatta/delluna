export const name="file-svg-thin";
export const id="dl_7b61f1244c854ede9e24";
export const url=new URL("../icons/file-svg-thin.svg?v=966bab13da9571f34c5c374f9676dd0363a33dee7ace2e2f807691709e043683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
