export const name="graduation-cap-bold";
export const id="dl_896c8f76e59a409b8811";
export const url=new URL("../icons/graduation-cap-bold.svg?v=507eecd4a9fad56bcc3cca48a94653c5c919abd69e986c8c3afc766c69bfdffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
