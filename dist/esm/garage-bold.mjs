export const name="garage-bold";
export const id="dl_4e6f18adadbd4470931f";
export const url=new URL("../icons/garage-bold.svg?v=e5c4d1df4a6f3c5e381782ab8cc033324573486872db5f7bf52d418f603e3207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
