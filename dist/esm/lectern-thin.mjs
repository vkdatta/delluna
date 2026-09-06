export const name="lectern-thin";
export const id="dl_2fb3039ab59b4295a03d";
export const url=new URL("../icons/lectern-thin.svg?v=da93ce9ba9c0b45d42b0be5cc9c40f2411d78183c2820f1011e5b8dc1aadd48f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
