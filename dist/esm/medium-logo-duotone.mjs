export const name="medium-logo-duotone";
export const id="dl_cec95fd0621f48fbb18d";
export const url=new URL("../icons/medium-logo-duotone.svg?v=a625431b743e35e081b03a00ca7f7bb59972c57bc5267b68459693d6900357d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
