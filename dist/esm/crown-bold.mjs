export const name="crown-bold";
export const id="dl_47144c4d3c5d4e699bde";
export const url=new URL("../icons/crown-bold.svg?v=94727a8aa3cc58bd80ef0df3eace3deeb987f67188fda284cb4222f869f4afba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
