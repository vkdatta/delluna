export const name="microscope";
export const id="dl_1dccd67d94ae4164b4f5";
export const url=new URL("../icons/microscope.svg?v=932d7641e2cb21a2eff24ed0c1a92acb8645680089a004f324b10031d2bb010b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
