export const name="other_admission";
export const id="dl_03e060d52f184a3225b3";
export const url=new URL("../icons/other_admission.svg?v=b4b0d077242866e0032b7dc5b92de928b9b6e98c1334155081446759696cb98e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
