export const name="football-helmet-thin";
export const id="dl_d656646fcced4cf092cf";
export const url=new URL("../icons/football-helmet-thin.svg?v=777353bcf7b0352d5e8f047bbea2a0607fa9fbd33bee4f4e5d58565e8e62662c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
