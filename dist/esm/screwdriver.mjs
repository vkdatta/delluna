export const name="screwdriver";
export const id="dl_282ff8880a5af7fa044b";
export const url=new URL("../icons/screwdriver.svg?v=9ed4c3608a714f423644f0c9f6e67abf11a1e135aaee642d9c4e76b9b8453b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
