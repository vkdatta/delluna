export const name="file-svg-thin";
export const id="dl_7b61f1244c854ede9e24";
export const url=new URL("../icons/file-svg-thin.svg?v=45997598186b163ab5516a88d3af2dd40aee05755d460220e8bc4dfad0ec8c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
