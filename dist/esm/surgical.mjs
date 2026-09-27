export const name="surgical";
export const id="dl_509ee0dbd0572a078470";
export const url=new URL("../icons/surgical.svg?v=00a610b81f7e3f0c9ff4f3ec641be4f69a08ae7dd44db9504934abea7d7126af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
