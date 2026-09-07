export const name="person-simple-thin";
export const id="dl_4323a50636624fe5bfab";
export const url=new URL("../icons/person-simple-thin.svg?v=d03095829ac872ce1f7053cd417af372a0209c58c6875979eddf4f13db35301c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
