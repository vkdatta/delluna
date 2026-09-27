export const name="more";
export const id="dl_ed73cce5b166c8fb4380";
export const url=new URL("../icons/more.svg?v=72bd00a61ec942101f1b8b4df3583fcc4c780ba69972350c211420c94d9bea5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
