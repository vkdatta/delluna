export const name="lucid_2-laptop-minimal";
export const id="dl_8807b80286064ab9b160";
export const url=new URL("../icons/lucid_2-laptop-minimal.svg?v=1ff9fce81d078a80c26285afe1c9c78cac8c2eb8daadf60c674156cc33305072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
