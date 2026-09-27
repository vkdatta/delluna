export const name="baby-bold";
export const id="dl_2c0755145d5043489800";
export const url=new URL("../icons/baby-bold.svg?v=d4365f9e112a32a8af02fda433e727b972f53da3c7d03c5cbf3f93a09b6a8529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
