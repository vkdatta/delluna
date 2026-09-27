export const name="brackets-curly-duotone";
export const id="dl_2573728b5f3340cb8906";
export const url=new URL("../icons/brackets-curly-duotone.svg?v=cc0cb7cf70c6e010b41fbdde2c466445fd3029a5cfbedf4ba1d51a1bb8ff78f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
