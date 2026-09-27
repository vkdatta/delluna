export const name="lucid_3-repeat-1";
export const id="dl_722bc73e51424463afe8";
export const url=new URL("../icons/lucid_3-repeat-1.svg?v=cce4ccdb6047bf3a357ae317161cc81c12f89edc596601de41fff9d17bbe4de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
