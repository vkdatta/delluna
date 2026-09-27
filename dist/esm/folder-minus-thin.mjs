export const name="folder-minus-thin";
export const id="dl_5e3c76123abc4abe8aad";
export const url=new URL("../icons/folder-minus-thin.svg?v=0406d6e7e20a0c75da7cbd78dfa2530dd0589245f0a4b055fc7f8b6f0613704a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
