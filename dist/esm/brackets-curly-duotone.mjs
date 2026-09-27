export const name="brackets-curly-duotone";
export const id="dl_2573728b5f3340cb8906";
export const url=new URL("../icons/brackets-curly-duotone.svg?v=21e7b51a89444284fb41ac70bc1a4eca4588fa58547ff42b6fec782bc34ddac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
