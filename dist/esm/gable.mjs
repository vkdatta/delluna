export const name="gable";
export const id="dl_5f566d735406445ab348";
export const url=new URL("../icons/gable.svg?v=033d6927897df1dfe68cd86cab00614542a371aa71655058bf35965c21f89551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
