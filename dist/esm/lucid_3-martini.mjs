export const name="lucid_3-martini";
export const id="dl_b93bd9f85add4cf68aab";
export const url=new URL("../icons/lucid_3-martini.svg?v=6de42e61bbb69e5cbf429b3252c56de9da919ac6e5d179afe47e3b12572cc38a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
