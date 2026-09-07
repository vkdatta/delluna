export const name="lucid_1-bell-ring";
export const id="dl_f0dc68f45a844a79b537";
export const url=new URL("../icons/lucid_1-bell-ring.svg?v=bee6750f9b0dcecae4bfa60d185cf9432386a2b9c50a43ff277561db38e336f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
