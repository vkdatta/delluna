export const name="select_to_speak";
export const id="dl_d812a68bbbebbf0443d3";
export const url=new URL("../icons/select_to_speak.svg?v=d4a4ca45a7c31a58c69d663880cd26d2997f5dd7b34aad1d8ed1e047fd62688d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
