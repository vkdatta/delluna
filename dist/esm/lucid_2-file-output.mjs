export const name="lucid_2-file-output";
export const id="dl_c6308cfab302497e87b0";
export const url=new URL("../icons/lucid_2-file-output.svg?v=562f374c9e1473ee872157ae51b4ac9caf89a8be0c7723b7545fd406a4d99ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
