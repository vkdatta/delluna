export const name="unfold_more-fill";
export const id="dl_40c0d485cc91d139da04";
export const url=new URL("../icons/unfold_more-fill.svg?v=921866e66631af056b0afc56c8490ec67873b792c87e07f538660a92680eb4bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
