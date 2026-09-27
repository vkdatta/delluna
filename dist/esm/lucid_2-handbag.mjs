export const name="lucid_2-handbag";
export const id="dl_5203921295ee4e3b93d7";
export const url=new URL("../icons/lucid_2-handbag.svg?v=2505043d4531028272c098e1c5822b9648072c198cfbe44fdc213d7d8e76de5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
