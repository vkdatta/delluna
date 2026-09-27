export const name="trip_origin";
export const id="dl_efc5e751337f61ae20fb";
export const url=new URL("../icons/trip_origin.svg?v=e57ae91fb1100d4cb8468a4efe8599fb8e2ae7adac286795ae432aabbeafc43e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
