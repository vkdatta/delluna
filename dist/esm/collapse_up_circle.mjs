export const name="collapse_up_circle";
export const id="dl_442aa6cb457b2a4338dc";
export const url=new URL("../icons/collapse_up_circle.svg?v=d6a72634cbcf55182cbd3918928901f3ba43945fb19f3038c8c68a068420e43d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
