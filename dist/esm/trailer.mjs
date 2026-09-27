export const name="trailer";
export const id="dl_fdaab6a9be4142e59c9f";
export const url=new URL("../icons/trailer.svg?v=f3cac87d4f0e117b8b267c061ebfa4986eab62b8014be4f3684f3135514e607d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
