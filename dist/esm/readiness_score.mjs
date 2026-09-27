export const name="readiness_score";
export const id="dl_be0c0c39600060941695";
export const url=new URL("../icons/readiness_score.svg?v=6d4f7f4a26fef3d9a0eba01ebf9e8ceef6e6979967f17eafc30654eaa20a0b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
