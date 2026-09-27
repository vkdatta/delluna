export const name="lucid_2-list-collapse";
export const id="dl_29b5bd5ba8764370acd6";
export const url=new URL("../icons/lucid_2-list-collapse.svg?v=0674d41a7f82b3bb46c6694721a86e62a1bfe51990a80d58fa9991a37cdd87d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
