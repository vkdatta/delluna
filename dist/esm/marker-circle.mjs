export const name="marker-circle";
export const id="dl_97f0c86f8b87483a9a1b";
export const url=new URL("../icons/marker-circle.svg?v=866cef5f1578ffb3e515ed8844ae0050fb04af6aba940e8d377f2f153e68882e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
