export const name="flower-tulip-thin";
export const id="dl_f5df8b11cf1044cdb648";
export const url=new URL("../icons/flower-tulip-thin.svg?v=708575f28aeb0acf87e10e03bf117c00ea39d888bade41d6cef8d40239639550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
