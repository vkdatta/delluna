export const name="script";
export const id="dl_f21caac45c6110ead754";
export const url=new URL("../icons/script.svg?v=3e171a899be8944c7431ee1c29d690ec3ba9dd514dad51e199efdfce027270ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
