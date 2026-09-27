export const name="database-light";
export const id="dl_987b076f53ea48bc9096";
export const url=new URL("../icons/database-light.svg?v=b5890d6ca5ff34065d14d967746c3695a386f9bc42b7538f8d37b218a55bb33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
