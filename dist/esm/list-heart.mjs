export const name="list-heart";
export const id="dl_ecd49ebf9e854e55b041";
export const url=new URL("../icons/list-heart.svg?v=17ef97f68975a848350ee2b9f643bc76303e8520bc388f4d5b4f6b1b45df6ac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
