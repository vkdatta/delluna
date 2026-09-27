export const name="lucid_1-calendar";
export const id="dl_90035d3df5ba4a14805c";
export const url=new URL("../icons/lucid_1-calendar.svg?v=d75f6b125bbf66ae82f6de7594d66695033fb5030022424cb148e86cb3d1f558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
