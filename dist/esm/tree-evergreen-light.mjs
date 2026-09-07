export const name="tree-evergreen-light";
export const id="dl_79f2a47707c4411696b6";
export const url=new URL("../icons/T/tree-evergreen-light.svg?v=75999918c1334b2330cc3d8deee529404e48f1051f78725a641e134333056814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
