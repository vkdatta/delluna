export const name="house-line";
export const id="dl_266028ac09ba4737bedd";
export const url=new URL("../icons/house-line.svg?v=59509d349ac87385f1b053eb662497615aff79672d910b7d4df2f4b8930eaba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
