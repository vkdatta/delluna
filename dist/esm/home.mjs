export const name="home";
export const id="dl_70da741ebf0d46489309";
export const url=new URL("../icons/home.svg?v=d910f686fb7741aa4994a0bf93dee352005d952d9b7e134c23485cacfe072034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
