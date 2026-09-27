export const name="dog-fill";
export const id="dl_7c4b6ec87e1b4c438833";
export const url=new URL("../icons/dog-fill.svg?v=a2fd1244063a1e7b33197f87cc92c4edefa048e385841e53f30d51724f9f9eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
