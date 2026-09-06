export const name="cube-transparent-fill";
export const id="dl_2a416be7bdd249428491";
export const url=new URL("../icons/cube-transparent-fill.svg?v=a36a7f8a60bb1278c176ce7083ce97c8b0aabcb7f5d1ea1b5c51aba00060ab9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
