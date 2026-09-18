export const name="chronic";
export const id="dl_1c1fe5e03010415b997b";
export const url=new URL("../icons/chronic.svg?v=5c07666fb567b773d9c3958e88bcb244a1e7c1efc3bbf7dea72a605c3b05491b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
