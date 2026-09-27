export const name="paper-plane-tilt";
export const id="dl_b25434ad073d45ca80d0";
export const url=new URL("../icons/paper-plane-tilt.svg?v=83d61a4c399906b509b3a0edfeff0b058da1395d997eb10f7f5dd4e30cc85ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
