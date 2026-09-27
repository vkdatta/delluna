export const name="pencil-simple-slash";
export const id="dl_06ba757a13fb45478dda";
export const url=new URL("../icons/pencil-simple-slash.svg?v=b24c2930218af563731a60dec5dcc16fa4c8c2d99b38e2b183263d967521a975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
