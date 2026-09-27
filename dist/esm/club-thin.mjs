export const name="club-thin";
export const id="dl_d4cb136752b84f76bcf7";
export const url=new URL("../icons/club-thin.svg?v=d04bd4466111ff778d53c6188ec98b55ebfcd45c0e329d94576b228858d0d08d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
