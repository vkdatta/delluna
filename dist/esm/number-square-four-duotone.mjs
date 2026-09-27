export const name="number-square-four-duotone";
export const id="dl_6895ddd064d341ffa193";
export const url=new URL("../icons/number-square-four-duotone.svg?v=9c839a87dbbc8502724d51c1dbd2ad42b9c572fc46283e8cd4dff4b501118db2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
