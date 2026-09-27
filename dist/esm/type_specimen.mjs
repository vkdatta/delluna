export const name="type_specimen";
export const id="dl_023bc62a695e3c5feb28";
export const url=new URL("../icons/type_specimen.svg?v=cc72b1f72cd1334a678b6763b4365edc1a81ec64f9d99509d4e80223c8d5b15e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
