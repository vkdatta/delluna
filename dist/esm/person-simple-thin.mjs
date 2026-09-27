export const name="person-simple-thin";
export const id="dl_4323a50636624fe5bfab";
export const url=new URL("../icons/person-simple-thin.svg?v=2e8bb668ba6e34c4a34a0588b31252c2a8df7f395fc82a1633cd7cf2ecf3c135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
