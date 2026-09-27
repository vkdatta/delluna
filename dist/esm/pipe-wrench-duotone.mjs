export const name="pipe-wrench-duotone";
export const id="dl_8fb096ea249442f1a34c";
export const url=new URL("../icons/pipe-wrench-duotone.svg?v=59bcde6c9b9963ed9540dafb9651ebae9fe0eb3dff82295d30328b51ce23d191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
