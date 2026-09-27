export const name="code-block";
export const id="dl_d7b8229b9be64453bb95";
export const url=new URL("../icons/code-block.svg?v=ce58b1a467e8cdae8b81004082db6a89283d740fff04928b18878519b11f2db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
