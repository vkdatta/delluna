export const name="home_max_dots-fill";
export const id="dl_bb5b55a1b07e1410a882";
export const url=new URL("../icons/home_max_dots-fill.svg?v=61e8ba11fb962b728e7c7bab0235a301d02e92087c2266b3b5e938d43479667e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
