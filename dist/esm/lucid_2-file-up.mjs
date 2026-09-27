export const name="lucid_2-file-up";
export const id="dl_61838c4325054e4a88bc";
export const url=new URL("../icons/lucid_2-file-up.svg?v=80547e80d4c328f1b24bb8e815c61bf4beb0714823efe64f1344041259399579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
