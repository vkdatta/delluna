export const name="farm-light";
export const id="dl_799b84e4d7a9499998f8";
export const url=new URL("../icons/farm-light.svg?v=c8030c80dced2131e065354d67dfe359261f03b4634d5c815229df5a8c158712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
